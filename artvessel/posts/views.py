from django.http import JsonResponse
from posts.models import GalleryPost
from posts.serialisers import post_serializer, shop_serializer


def post(request, pk):
    if GalleryPost.objects.filter(pk=pk).exists():
        post = GalleryPost.objects.get(pk=pk)
    return JsonResponse(post_serializer(request.get_host(), post))


def shop(request):
    return


def post_save(request):
    return


