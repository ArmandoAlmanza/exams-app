# Generated by Django 4.0.10 on 2023-09-25 15:42

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyUser',
            fields=[
                ('id', models.UUIDField(default=uuid.UUID('a5e164c1-6e9f-40fb-bf51-3938929e53e6'))),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(help_text='Emial of the user', max_length=254, primary_key=True, serialize=False, unique=True)),
            ],
        ),
    ]
