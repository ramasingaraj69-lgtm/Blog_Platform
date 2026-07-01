from django.urls import path

from .views import (

    toggle_bookmark,

    get_bookmarks,
)

urlpatterns = [

    path("toggle/<str:blog_id>/", toggle_bookmark),

    path("<str:user>/", get_bookmarks),
]