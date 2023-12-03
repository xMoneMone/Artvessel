from userprofile.models import UserProfile, UserSave
from posts.serialisers import user_posts_serialiser
from django.db.models import Count


def all_users_serialiser(host_base):
    host = "http://" + host_base
    userprofiles = UserProfile.objects.all().annotate(usersave_count=Count('usersave')).order_by('-usersave_count')
    data = {"all_users": []}
    for userprofile in userprofiles:
        if userprofile.profile_pic:
            pfp = host + userprofile.profile_pic.url
        else:
            pfp = ""

        if userprofile.cover_pic:
            cover = host + userprofile.cover_pic.url
        else:
            cover = ""

        current_profile = {
            "username": userprofile.user.username,
            "pfp": pfp,
            "cover": cover,
            "bio": userprofile.bio,
            "location": userprofile.location,
            "phone": userprofile.phone,
            "email": userprofile.email,
            "link1": userprofile.link1,
            "link2": userprofile.link2,
            "link3": userprofile.link3,
            "link4": userprofile.link4,
            "link5": userprofile.link5,
            "shop_info": userprofile.shop_info,
            "posts": user_posts_serialiser(userprofile.user, host_base)
        }

        data["all_users"].append(current_profile)

    return data
