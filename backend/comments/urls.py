from django.urls import path

from .views import (
    add_comment,
    get_comments,
    delete_comment,
)

urlpatterns = [

    # ADD COMMENT
    path(
        "add/",
        add_comment
    ),

    # GET COMMENTS
    path(
        "<str:blog_id>/",
        get_comments
    ),

    # DELETE COMMENT
    path(
        "delete/<str:id>/",
        delete_comment
    ),
]