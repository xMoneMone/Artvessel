from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts-api/', include('posts.urls')),
    path('users-api/', include('userprofile.urls'))
]
