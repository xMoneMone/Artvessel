from django import forms
from posts.models import GalleryPost, ShopPost


class GalleryPostForm(forms.ModelForm):
    class Meta:
        model = GalleryPost
        fields = ['title', 'drawing', 'description']


class ShopPostForm(forms.ModelForm):
    class Meta:
        model = ShopPost
        fields = ['title', 'price', 'image', 'description']
