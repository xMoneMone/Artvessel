from django.http import JsonResponse
from posts.models import GalleryPost, ShopPost
from posts.serialisers import post_serializer, shop_serializer
from posts.forms import GalleryPostForm, ShopPostForm
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
import json


def post(request, pk):
    if GalleryPost.objects.filter(pk=pk).exists():
        post = GalleryPost.objects.get(pk=pk)
    return JsonResponse(post_serializer(request.get_host(), post))


@csrf_exempt
def post_create(request):
    data = request.POST

    body = {
        'user': data.get('user', None),
        'title': data.get('title', None),
        'drawing': request.FILES.get('drawing', None),
        'description': data.get('description', None)
    }

    cur_user = body['user']
    body['user'] = User.objects.get(username=cur_user)

    cur_post = GalleryPost(user=body['user'])
    cur_post.drawing.save(body['drawing'].name, body['drawing'])

    form = GalleryPostForm(body, instance=cur_post)
    if form.is_valid():
        form.save()
        return JsonResponse({'status': 'ok'})
    else:
        to_send = {'status': []}
        errors = json.loads(form.errors.as_json())
        for key, item in errors.items():
            for error in item:
                to_send['status'].append(error['message'])
        return JsonResponse(to_send)


@csrf_exempt
def post_edit(request, pk):
    if GalleryPost.objects.filter(pk=pk).exists():
        cur_post = GalleryPost.objects.get(pk=pk)

        data = request.POST
        title = data.get('title', None)
        if title:
            cur_post.title = title
        description = data.get('description', None)
        if description:
            cur_post.description = description

        cur_post.save()

        return JsonResponse({"status": "ok"})
    return JsonResponse({"status": "doesn't exist"})


@csrf_exempt
def post_delete(request, pk):
    if GalleryPost.objects.filter(pk=pk).exists():
        cur_post = GalleryPost.objects.get(pk=pk)
        cur_post.delete()


@csrf_exempt
def shop_create(request):
    data = request.POST

    body = {
        'user': data.get('user', None),
        'title': data.get('title', None),
        'price': data.get('price', None),
        'image': request.FILES.get('image', None),
        'description': data.get('description', None)
    }

    cur_user = body['user']
    body['user'] = User.objects.get(username=cur_user)

    cur_post = ShopPost(user=body['user'])
    cur_post.image.save(body['image'].name, body['image'])

    form = ShopPostForm(body, instance=cur_post)
    if form.is_valid():
        form.save()
        return JsonResponse({'status': 'ok'})
    else:
        to_send = {'status': []}
        errors = json.loads(form.errors.as_json())
        for key, item in errors.items():
            for error in item:
                to_send['status'].append(error['message'])
        return JsonResponse(to_send)


def shop(request, pk):
    if ShopPost.objects.filter(pk=pk).exists():
        cur_shop = ShopPost.objects.get(pk=pk)
        return JsonResponse(shop_serializer(request.get_host(), cur_shop))


@csrf_exempt
def shop_edit(request, pk):
    if ShopPost.objects.filter(pk=pk).exists():
        cur_post = ShopPost.objects.get(pk=pk)

        data = request.POST
        title = data.get('title', None)
        if title:
            cur_post.title = title
        description = data.get('description', None)
        if description:
            cur_post.description = description
        price = data.get('price', None)
        if price:
            cur_post.price = price

        cur_post.save()

        return JsonResponse({"status": "ok"})
    return JsonResponse({"status": "doesn't exist"})


def post_save(request):
    return
