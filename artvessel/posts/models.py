from django.db import models
from django.contrib.auth.models import User
from posts.validators import validate_file_size
from django.core.validators import MaxValueValidator


class GalleryPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField(max_length=50)
    drawing = models.ImageField(upload_to='images', validators=(validate_file_size,))
    description = models.TextField(max_length=2000, blank=True, null=True)
    priority = models.IntegerField(validators=([MaxValueValidator(1000000)]), default=0)


class ShopPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField(max_length=50)
    price = models.CharField(max_length=20)
    image = models.ImageField(upload_to='images', validators=(validate_file_size,))
    description = models.TextField(max_length=400, blank=True, null=True)
    priority = models.IntegerField(validators=([MaxValueValidator(1000000)]), default=0)


class PostSave(models.Model):
    user = models.ManyToManyField(User)
    to_post = models.ForeignKey(GalleryPost, on_delete=models.CASCADE)
