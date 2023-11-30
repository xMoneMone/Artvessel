from django.contrib import admin
from posts.models import GalleryPost, PostSave


def shorten(string, val: int):
    if not string:
        return None
    if len(string) > val:
        return string[:val] + "..."
    else:
        return string


@admin.register(GalleryPost)
class GalleryPostAdmin(admin.ModelAdmin):
    list_display = ("id", "artist", "description_pv")

    def artist(self, obj):
        return shorten(str(obj.user), 10)

    def description_pv(self, obj):
        return shorten(obj.description, 20)


@admin.register(PostSave)
class PostSaveAdmin(admin.ModelAdmin):
    list_display = ("id", "post")

    def post(self, obj):
        post = obj.to_post
        artist = str(post.user)
        return f"post #{post.id} by {shorten(artist, 10)}"