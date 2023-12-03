def post_serializer(host, post):
    host = "http://" + host

    current_post = {
        "id": post.id,
        "title": post.title,
        "image": host + post.drawing.url,
        "description": post.description,
        "priority": post.priority,
        "height": post.drawing.height,
        "width": post.drawing.width
    }

    return current_post
