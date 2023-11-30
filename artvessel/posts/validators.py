from django.core.exceptions import ValidationError


def validate_file_size(image):
    if image.size > 10485760:
        raise ValidationError("Maximum size of profile picture is 10MB")
