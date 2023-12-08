from django import forms
from posts.models import GalleryPost


class GalleryPostForm(forms.ModelForm):
    class Meta:
        model = GalleryPost
        fields = ['title', 'drawing', 'description']
