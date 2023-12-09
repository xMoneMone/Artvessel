from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from userprofile.models import UserProfile, UserSave
from userprofile.forms import CreateUserForm
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
    return JsonResponse({})


@csrf_exempt
def signup(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    form = CreateUserForm(body)
    if form.is_valid():
        form.save()
        cur_user = User.objects.get(username=body['username'])
        user_profile = UserProfile(user=cur_user)
        user_profile.save()
        return JsonResponse({'status': 'ok',
                             'user': cur_user.username})
    else:
        to_send = {'status': []}
        errors = json.loads(form.errors.as_json())
        for key, item in errors.items():
            for error in item:
                to_send['status'].append(error['message'])
        return JsonResponse(to_send)


@csrf_exempt
def user_edit(request):
    data = request.POST

    cur_user = User.objects.get(username=data.get('user', None)).userprofile

    cover_pic = request.FILES.get('cover', None)
    if cover_pic:
        cur_user.cover_pic = cover_pic
    profile_pic = request.FILES.get('profile_pic', None)
    if profile_pic:
        cur_user.profile_pic = profile_pic
    bio = data.get('bio', None)
    if bio:
        cur_user.bio = bio
    location = data.get('location', None)
    if location:
        cur_user.location = location
    phone = data.get('phone', None)
    if phone:
        cur_user.phone = phone
    email = data.get('email', None)
    if email:
        cur_user.location = email
    link1 = data.get('link1', None)
    if link1:
        cur_user.link1 = link1
    link2 = data.get('link2', None)
    if link2:
        cur_user.link2 = link2
    link3 = data.get('link3', None)
    if link3:
        cur_user.link3 = link3
    link4 = data.get('link4', None)
    if link4:
        cur_user.link4 = link4
    link5 = data.get('link5', None)
    if link5:
        cur_user.link5 = link5
    shop_info = data.get('shop_info', None)
    if shop_info:
        cur_user.shop_info = shop_info
    shop_theme1 = data.get('shop_theme1', None)
    if shop_theme1:
        cur_user.shop_theme1 = shop_theme1
    shop_theme2 = data.get('shop_theme2', None)
    if shop_theme2:
        cur_user.shop_theme2 = shop_theme2

    cur_user.save()

    return JsonResponse({"status": "ok"})


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


@csrf_exempt
def profile_delete(request, username):
    if User.objects.filter(username=username).exists():
        cur_post = User.objects.get(username=username)
        cur_post.delete()


def profile_save(request):
    return
