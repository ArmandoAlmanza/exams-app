from mongoengine import Document, EmbeddedDocument, fields
from uuid import uuid4


class QuestionElement(EmbeddedDocument):
    correct_answer = fields.StringField(max_length=250)
    question = fields.StringField(max_length=250)
    answers = fields.ListField(fields.StringField(max_length=500))
    def __str__(self):
        return self.label


class Exam(Document):
    exam_id = fields.StringField(max_length=150)
    topic = fields.StringField(max_length=50)
    questions = fields.ListField(fields.EmbeddedDocumentField(
        QuestionElement), null=True, blank=True)
    meta = {
        'db_alias': 'default',
        'collection': 'examns',
        'db': 'unam',
    }

    def __str__(self):
        return str(self.id)
