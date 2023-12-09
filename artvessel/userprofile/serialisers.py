from posts.serialisers import post_serializer, shop_serializer


def user_serializer(host_base, userprofile):
    host = "http://" + host_base

    if userprofile.profile_pic:
        pfp = host + userprofile.profile_pic.url
        pfp_height = userprofile.profile_pic.height
        pfp_width = userprofile.profile_pic.width
    else:
        pfp = ""
        pfp_height = 0
        pfp_width = 0

    if userprofile.cover_pic:
        cover = host + userprofile.cover_pic.url
    else:
        cover = ""

    current_profile = {
        "username": userprofile.user.username,
        "pfp": pfp,
        "height": pfp_height,
        "width": pfp_width,
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
        "posts": [],
        "shop": [],
        "saved_users_names": [],
        "saved_users": [],
        "saved_posts_ids": [],
        "saved_posts": [],
        "shop_theme1": userprofile.shop_theme1,
        "shop_theme2": userprofile.shop_theme2
    }

    for post in userprofile.user.gallerypost_set.all().order_by('-priority'):
        current_profile["posts"].append(post_serializer(host_base, post))

    for user in userprofile.user.usersave_set.all().order_by('-id'):
        current_profile["saved_users_names"].append(user.to_user.user.username)

    for shop in userprofile.user.shoppost_set.all().order_by('-priority'):
        current_profile["shop"].append(shop_serializer(host_base, shop))

    for post in userprofile.user.postsave_set.all().order_by('-id'):
        current_profile["saved_posts_ids"].append(post.to_post.id)
        current_profile["saved_posts"].append(post_serializer(host_base, post.to_post))

    return current_profile
