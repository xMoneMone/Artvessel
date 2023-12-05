def post_serializer(host, post):
    host = "http://" + host

    current_post = {
        "id": post.id,
        "author": post.user.username,
        "title": post.title,
        "image": host + post.drawing.url,
        "description": post.description,
        "priority": post.priority,
        "height": post.drawing.height,
        "width": post.drawing.width
    }

    return current_post


def shop_serializer(host, shop):
    host = "http://" + host

    current_post = {
        "id": shop.id,
        "author": shop.user.username,
        "title": shop.title,
        "price": shop.price,
        "image": host + shop.image.url,
        "description": shop.description,
        "priority": shop.priority,
    }

    return current_post
