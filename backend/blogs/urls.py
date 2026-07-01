from django.urls import path

from .views import (

    create_blog,

    get_blogs,

    get_single_blog,

    update_blog,

    delete_blog,

    like_blog,
)

urlpatterns = [

    path("", get_blogs),

    path("create/", create_blog),

    path("<str:id>/", get_single_blog),

    path("update/<str:id>/", update_blog),

    path("delete/<str:id>/", delete_blog),

    path("like/<str:id>/", like_blog),
]