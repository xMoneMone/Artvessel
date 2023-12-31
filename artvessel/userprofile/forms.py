from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from userprofile.models import UserProfile


class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'password1', 'password2']