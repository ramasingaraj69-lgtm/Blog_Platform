
from rest_framework.decorators import api_view
from rest_framework.response import Response
from bson import ObjectId
from bson.errors import InvalidId

from config.mongodb import db

blogs = db["blogs"]


# TOGGLE BOOKMARK
@api_view(["POST"])
def toggle_bookmark(request, blog_id):

    user = request.data.get("user")

    # VALIDATE USER
    if not user:

        return Response({
            "error": "User is required"
        }, status=400)

    # VALIDATE OBJECT ID
    try:

        object_id = ObjectId(blog_id)

    except InvalidId:

        return Response({
            "error": "Invalid blog ID"
        }, status=400)

    # FIND BLOG
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

    # UPDATE DATABASE
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

        "totalBookmarks": len(bookmarks),

        "bookmarks": bookmarks
    })


# GET USER BOOKMARKS
@api_view(["GET"])
def get_bookmarks(request, user):

    bookmarked_blogs = []

    blogs_cursor = blogs.find({

        "bookmarks": user
    })

    for blog in blogs_cursor:

        blog["_id"] = str(blog["_id"])

        bookmarked_blogs.append(blog)

    return Response(bookmarked_blogs)



