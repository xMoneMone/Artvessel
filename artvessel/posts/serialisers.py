def post_serializer(host, post):
    host = "http://" + host

    current_post = {
        "id": post.id,
        "title": post.title,
        "image": host + post.drawing.url,
        "description": post.description,
        "priority": post.priority
    }

    return current_post
