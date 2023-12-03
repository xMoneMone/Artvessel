from django.http import JsonResponse
from django.contrib.auth.models import User
from userprofile.models import UserProfile, UserSave
from django.db.models import Count
from userprofile.serialisers import all_users_serializer


def login(request):
    return


def logout(request):
    return


def signup(request):
    return


def user(request):
    return


def all_users(request):
    userprofiles = UserProfile.objects.all().annotate(usersave_count=Count('usersave')).order_by('-usersave_count')
    data = {"all_users": []}

    for userprofile in userprofiles:
        data["all_users"].append(all_users_serializer(request.get_host(), userprofile))

    return JsonResponse(data)


def profile(request):
    return


def profile_save(request):
    return
