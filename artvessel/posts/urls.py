from django.urls import path
from posts import views

urlpatterns = [
    path('post/<int:pk>', views.post, name="post"),
    path('post/<int:pk>/save', views.post_save, name="post-save"),
    path('shop/<int:pk>', views.shop, name="shop")
]
