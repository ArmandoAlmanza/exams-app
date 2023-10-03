from mongoengine import Document, fields
from uuid import uuid4


class MyUser(Document):
    user_id = fields.UUIDField(default=uuid4())
    name = fields.StringField(required=True, max_length=100)
    email = fields.EmailField(
        required=True, unique=True,  help_text="Email of the user")
    active_exams = fields.ListField(
        fields.StringField(max_length=500, default="none"))
    meta = {
        'db_alias': 'default',
        'collection': 'users',
        'db': 'unam',
    }

    def __str__(self) -> str:
        return f'{self.name} ({self.email})'
