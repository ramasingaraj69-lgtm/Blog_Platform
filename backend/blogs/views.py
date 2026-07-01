from rest_framework.decorators import api_view
from rest_framework.response import Response

from bson import ObjectId
from bson.errors import InvalidId

from config.mongodb import db

blogs = db["blogs"]


# CREATE BLOG
@api_view(["POST"])
def create_blog(request):

    data = request.data

    title = data.get("title")
    description = data.get("description")
    image = data.get("image")
    author = data.get("author")

    # VALIDATION
    if not title or not description or not author:

        return Response({
            "error": "All fields are required"
        }, status=400)

    blog = {

        "title": title,

        "description": description,

        "image": image,

        "author": author,

        "likes": [],

        "bookmarks": [],
    }

    result = blogs.insert_one(blog)

    blog["_id"] = str(result.inserted_id)

    return Response(blog)


# GET ALL BLOGS
@api_view(["GET"])
def get_blogs(request):

    search = request.GET.get("search")

    query = {}

    if search:

        query["title"] = {

            "$regex": search,

            "$options": "i"
        }

    all_blogs = []

    for blog in blogs.find(query):

        blog["_id"] = str(blog["_id"])

        all_blogs.append(blog)

    return Response(all_blogs)


# GET SINGLE BLOG
@api_view(["GET"])
def get_single_blog(request, id):

    try:

        object_id = ObjectId(id)

    except InvalidId:

        return Response({
            "error": "Invalid blog ID"
        }, status=400)

    blog = blogs.find_one({

        "_id": object_id
    })

    if not blog:

        return Response({

            "error": "Blog not found"

        }, status=404)

    blog["_id"] = str(blog["_id"])

    return Response(blog)


# UPDATE BLOG
@api_view(["PUT"])
def update_blog(request, id):

    data = request.data

    try:

        object_id = ObjectId(id)

    except InvalidId:

        return Response({
            "error": "Invalid blog ID"
        }, status=400)

    blogs.update_one(

        {
            "_id": object_id
        },

        {
            "$set": {

                "title": data.get("title"),

                "description": data.get("description"),

                "image": data.get("image"),
            }
        }
    )

    updated_blog = blogs.find_one({

        "_id": object_id
    })

    if not updated_blog:

        return Response({
            "error": "Blog not found"
        }, status=404)

    updated_blog["_id"] = str(updated_blog["_id"])

    return Response(updated_blog)


# DELETE BLOG
@api_view(["DELETE"])
def delete_blog(request, id):

    try:

        object_id = ObjectId(id)

    except InvalidId:

        return Response({
            "error": "Invalid blog ID"
        }, status=400)

    blogs.delete_one({

        "_id": object_id
    })

    return Response({

        "message": "Blog deleted successfully"

    })


# LIKE / UNLIKE BLOG
@api_view(["POST"])
def like_blog(request, id):

    user = request.data.get("user")

    if not user:

        return Response({
            "error": "User required"
        }, status=400)

    try:

        object_id = ObjectId(id)

    except InvalidId:

        return Response({
            "error": "Invalid blog ID"
        }, status=400)

    blog = blogs.find_one({

        "_id": object_id
    })

    if not blog:

        return Response({
            "error": "Blog not found"
        }, status=404)

    likes = blog.get("likes", [])

    # UNLIKE
    if user in likes:

        likes.remove(user)

        liked = False

        message = "Blog unliked"

    # LIKE
    else:

        likes.append(user)

        liked = True

        message = "Blog liked"

    blogs.update_one(

        {
            "_id": object_id
        },

        {
            "$set": {
                "likes": likes
            }
        }
    )

    return Response({

        "message": message,

        "liked": liked,

        "likes": likes,

        "totalLikes": len(likes)
    })


# BOOKMARK / REMOVE BOOKMARK
@api_view(["POST"])
def bookmark_blog(request, id):

    user = request.data.get("user")

    if not user:

        return Response({
            "error": "User required"
        }, status=400)

    try:

        object_id = ObjectId(id)

    except InvalidId:

        return Response({
            "error": "Invalid blog ID"
        }, status=400)

    blog = blogs.find_one({

        "_id": object_id
    })

    if not blog:

        return Response({
            "error": "Blog not found"
        }, status=404)

    bookmarks = blog.get("bookmarks", [])

    # REMOVE BOOKMARK
    if user in bookmarks:

        bookmarks.remove(user)

        bookmarked = False

        message = "Bookmark removed"

    # ADD BOOKMARK
    else:

        bookmarks.append(user)

        bookmarked = True

        message = "Blog bookmarked"

    blogs.update_one(

        {
            "_id": object_id
        },

        {
            "$set": {
                "bookmarks": bookmarks
            }
        }
    )

    return Response({

        "message": message,

        "bookmarked": bookmarked,

        "bookmarks": bookmarks,

        "totalBookmarks": len(bookmarks)
    })


