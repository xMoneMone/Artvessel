from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from userprofile.models import UserProfile, UserSave
from django.db.models import Count
from userprofile.serialisers import user_serializer
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
import json


def csrf_token(request):
    return JsonResponse({"token": get_token(request)})


@csrf_exempt
def login(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    username = body['username']
    password = body['password']

    cur_user = authenticate(request, username=username, password=password)

    if cur_user is not None:
        authenticated = User.objects.get(username=username)
        return JsonResponse({"user": authenticated.username})
    print(cur_user)
    return JsonResponse({})


def logout(request):
    return


@csrf_exempt
def signup(request):
    return


def user(request):
    cur_user = request.user
    print(cur_user)
    return JsonResponse({})


@csrf_exempt
def user_edit(request):
    print(request)
    return JsonResponse({})


def all_users(request):
    userprofiles = UserProfile.objects.all().annotate(usersave_count=Count('usersave')).order_by('-usersave_count')
    data = {"all_users": []}

    for userprofile in userprofiles:
        data["all_users"].append(user_serializer(request.get_host(), userprofile))

    return JsonResponse(data)


def profile(request, username):
    if User.objects.filter(username=username).exists():
        cur_profile = User.objects.get(username=username)
        return JsonResponse(user_serializer(request.get_host(), cur_profile.userprofile))
    return JsonResponse({})


def profile_save(request):
    return
