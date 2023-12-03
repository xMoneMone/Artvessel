from posts.serialisers import user_posts_serializer


def all_users_serializer(host_base, userprofile):
    host = "http://" + host_base

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
        "posts": []
    }

    for post in userprofile.user.gallerypost_set.all().order_by('-priority'):
        current_profile["posts"].append(user_posts_serializer(host_base, post))

    return current_profile
