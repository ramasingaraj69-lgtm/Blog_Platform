from rest_framework.decorators import api_view
from rest_framework.response import Response
from config.mongodb import db
import bcrypt

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

        })

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
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(["POST"])
def login_user(request):

    data = request.data

    user = users.find_one({

        "email": data["email"]

    })

    if not user:

        return Response({

            "error": "Invalid email"

        })

    valid_password = bcrypt.checkpw(

        data["password"].encode("utf-8"),

        user["password"]

    )

    if not valid_password:

        return Response({

            "error": "Invalid password"

        })

    refresh = RefreshToken.for_user(request.user)

    return Response({

        "message": "Login successful",

        "access": str(refresh.access_token),

        "refresh": str(refresh),

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

        })

    user["_id"] = str(user["_id"])

    del user["password"]

    return Response(user)