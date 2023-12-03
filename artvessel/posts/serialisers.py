def user_posts_serialiser(user, host):
    data = []
    host = "http://" + host

    for post in user.gallerypost_set.all().order_by('-priority'):
        current_post = {
            "title": post.title,
            "image": host + post.drawing.url,
            "description": post.description,
            "priority": post.priority
        }

        data.append(current_post)

    return data
