from django.contrib import admin
from django.urls import path, include

urlpatterns = [

    path('admin/', admin.site.urls),

    path('api/users/', include('accounts.urls')),

    path('api/blogs/', include('blogs.urls')),

    path('api/comments/', include('comments.urls')),

     path('api/bookmarks/', include('bookmarks.urls')),
]