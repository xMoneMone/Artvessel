from django.http import JsonResponse
from django.contrib.auth.models import User
from userprofile.models import UserProfile, UserSave
from django.db.models import Count
from userprofile.serialisers import user_serializer


def login(request):
    return


def logout(request):
    return


def signup(request):
    return


def user(request):
    cur_user = request.user
    print(cur_user)
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


def profile_save(request):
    return
