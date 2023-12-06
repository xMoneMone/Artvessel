import re
from django.core.exceptions import ValidationError


def validate_file_size(image):
    if image.size > 2097152:
        raise ValidationError("Maximum size of profile picture is 2MB")


def hex_code_validator(code):
    if not re.search(r"#(([a-z]|[A-Z])|[0-9]){6}", code):
        raise ValidationError("Please input a valid hex code")
