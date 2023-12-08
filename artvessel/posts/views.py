from django.http import JsonResponse
from posts.models import GalleryPost
from posts.serialisers import post_serializer, shop_serializer
from posts.forms import GalleryPostForm
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


def shop(request):
    return


def post_save(request):
    return


