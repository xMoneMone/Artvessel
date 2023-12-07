from django.urls import path
from userprofile import views

urlpatterns = [
    path('login', views.login, name="login"),
    path('logout', views.logout, name="logout"),
    path('signup', views.signup, name="signup"),
    path('users', views.all_users, name="all-users"),
    path('user', views.user, name="user"),
    path('user/edit', views.user_edit, name="user-edit"),
    path('user/<str:username>', views.profile, name="profile"),
    path('user/<str:username>/save', views.profile_save, name="profile-save")
]
