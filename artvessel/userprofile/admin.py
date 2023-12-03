from django.contrib import admin
from userprofile.models import UserProfile, UserSave


def shorten(string, val: int):
    if not string:
        return None
    if len(string) > val:
        return string[:val] + "..."
    else:
        return string


@admin.register(UserProfile)
class USerProfileAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "bio_pv")

    def username(self, obj):
        username = str(obj.user)
        return shorten(username, 10)

    def nick(self, obj):
        return shorten(obj.nickname, 12)

    def bio_pv(self, obj):
        return shorten(obj.bio, 20)


@admin.register(UserSave)
class PostSaveAdmin(admin.ModelAdmin):
    list_display = ("id", "connection")

    def connection(self, user):
        return f"{user.user} -> {user.to_user}"
