from django.http import JsonResponse
from django.contrib.auth.models import User
from userprofile.serialisers import all_users_serialiser


def login(request):
    return


def logout(request):
    return


def signup(request):
    return


def user(request):
    return


def all_users(request):
    return JsonResponse(all_users_serialiser(request.get_host()))


def profile(request):
    return


def profile_save(request):
    return
