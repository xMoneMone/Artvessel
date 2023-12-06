from django.db import models
from django.contrib.auth.models import User
from userprofile.validators import validate_file_size, hex_code_validator
from django.core.validators import MaxValueValidator


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    profile_pic = models.ImageField(upload_to='images', validators=(validate_file_size,), blank=True, null=True)
    cover_pic = models.ImageField(upload_to='images', validators=(validate_file_size,), blank=True, null=True)
    bio = models.TextField(max_length=2000, blank=True, null=True)
    location = models.CharField(max_length=45, blank=True, null=True)
    phone = models.IntegerField(validators=[MaxValueValidator(999999999999999999)], blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    link1 = models.URLField(blank=True, null=True)
    link2 = models.URLField(blank=True, null=True)
    link3 = models.URLField(blank=True, null=True)
    link4 = models.URLField(blank=True, null=True)
    link5 = models.URLField(blank=True, null=True)
    shop_info = models.TextField(max_length=2000, blank=True, null=True)
    shop_theme1 = models.CharField(max_length=7, validators=(hex_code_validator,), default="#ffbdbd")
    shop_theme2 = models.CharField(max_length=7, validators=(hex_code_validator,), default="#ffeded")


class UserSave(models.Model):
    user = models.ManyToManyField(User)
    to_user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
