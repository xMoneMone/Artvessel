from django.http import JsonResponse
from django.shortcuts import render

from posts.models import GalleryPost
from posts.serialisers import post_serializer


def all_posts(request):
    return


def all_shop(request):
    return


def post(request, pk):
    if GalleryPost.objects.filter(pk=pk).exists():
        post = GalleryPost.objects.get(pk=pk)
    return JsonResponse(post_serializer(request.get_host(), post))


def shop(request):
    return


def post_save(request):
    return


