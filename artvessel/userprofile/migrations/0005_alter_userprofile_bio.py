# Generated by Django 4.2.7 on 2023-12-05 03:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0004_rename_to_post_usersave_to_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='bio',
            field=models.TextField(blank=True, max_length=2000, null=True),
        ),
    ]