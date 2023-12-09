from django.urls import path
from userprofile import views

urlpatterns = [
    path('csrf', views.csrf_token, name="csrf"),
    path('login', views.login, name="login"),
    path('signup', views.signup, name="signup"),
    path('users', views.all_users, name="all-users"),
    path('user/edit', views.user_edit, name="user-edit"),
    path('user/<str:username>', views.profile, name="profile"),
    path('delete/<str:username>', views.profile_delete, name="profile-delete"),
    path('user/save/save', views.profile_save, name="profile-save"),
    path('user/save/unsave', views.profile_unsave, name="profile-unsave")
]
