def user_posts_serializer(host, post):
    data = []
    host = "http://" + host

    current_post = {
        "title": post.title,
        "image": host + post.drawing.url,
        "description": post.description,
        "priority": post.priority
    }

    return current_post
