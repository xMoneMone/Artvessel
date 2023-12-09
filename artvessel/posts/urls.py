from django.urls import path
from posts import views

urlpatterns = [
    path('post/<int:pk>', views.post, name="post"),
    path('post/create', views.post_create, name="post-create"),
    path('post/edit/<int:pk>', views.post_edit, name="post-edit"),
    path('post/save/int:pk', views.post_save, name="post-save"),
    path('shop/<int:pk>', views.shop, name="shop"),
    path('shop/edit/<int:pk>', views.shop_edit, name="shop-edit"),
    path('shop/create', views.shop_create, name="shop-create")
]
