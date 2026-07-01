from rest_framework.decorators import api_view
from rest_framework.response import Response

from config.mongodb import db
from bson import ObjectId

comments = db["comments"]


@api_view(["POST"])
def add_comment(request):

    data = request.data

    comment = {

        "blog_id": data.get("blog_id"),

        "user": data.get("user"),

        "message": data.get("message"),
    }

    result = comments.insert_one(comment)

    comment["_id"] = str(result.inserted_id)

    return Response(comment)


@api_view(["GET"])
def get_comments(request, blog_id):

    all_comments = []

    for comment in comments.find({

        "blog_id": blog_id

    }):

        comment["_id"] = str(comment["_id"])

        all_comments.append(comment)

    return Response(all_comments)


@api_view(["DELETE"])
def delete_comment(request, id):

    comments.delete_one({

        "_id": ObjectId(id)

    })

    return Response({

        "message": "Comment deleted"

    })