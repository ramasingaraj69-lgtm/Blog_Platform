from rest_framework.decorators import api_view
from rest_framework.response import Response
from config.mongodb import db
from django.conf import settings
import bcrypt
import jwt
import datetime

users = db["users"]


@api_view(["POST"])
def register_user(request):

    data = request.data

    existing_user = users.find_one({

        "email": data["email"]

    })

    if existing_user:

        return Response({

            "error": "Email already exists"

        }, status=400)

    hashed_password = bcrypt.hashpw(

        data["password"].encode("utf-8"),

        bcrypt.gensalt()

    )

    user = {

        "username": data["username"],

        "email": data["email"],

        "password": hashed_password,
    }

    users.insert_one(user)

    return Response({

        "message": "User registered successfully"

    })


@api_view(["POST"])
def login_user(request):

    data = request.data

    user = users.find_one({

        "email": data["email"]

    })

    if not user:

        return Response({

            "error": "Invalid email"

        }, status=400)

    valid_password = bcrypt.checkpw(

        data["password"].encode("utf-8"),

        user["password"]

    )

    if not valid_password:

        return Response({

            "error": "Invalid password"

        }, status=400)

    payload = {

        "username": user["username"],

        "email": user["email"],

        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)

    }

    access_token = jwt.encode(

        payload,

        settings.SECRET_KEY,

        algorithm="HS256"

    )

    return Response({

        "message": "Login successful",

        "access": access_token,

        "username": user["username"],

    })


@api_view(["GET"])
def get_profile(request, username):

    user = users.find_one({

        "username": username

    })

    if not user:

        return Response({

            "error": "User not found"

        }, status=404)

    user["_id"] = str(user["_id"])

    del user["password"]

    return Response(user)