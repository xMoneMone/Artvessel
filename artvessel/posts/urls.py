from django.urls import path
from posts import views

urlpatterns = [
    path('posts', views.all_posts, name="all-posts"),
    path('shop', views.all_shop, name="all-shop"),
    path('posts/<int:pk>', views.post, name="post"),
    path('posts/<int:pk>/save', views.post_save, name="post-save"),
    path('shop/<int:pk>', views.shop, name="shop")
]
