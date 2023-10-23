from mongoengine import Document, EmbeddedDocument, fields
from uuid import uuid4
import random


class QuestionElement(EmbeddedDocument):
    correct_answer = fields.StringField(max_length=250)
    question = fields.StringField(max_length=250)
    options = fields.ListField(fields.StringField(max_length=500))

    def __str__(self):
        return self.label


class Question_Bank(Document):
    question_bank_id = fields.StringField(max_length=150)
    topic = fields.StringField(max_length=50)
    questions = fields.ListField(fields.EmbeddedDocumentField(
        QuestionElement), null=True, blank=True)
    meta = {
        'db_alias': 'default',
        'collection': 'questions_banks',
        'db': 'unam',
    }

    def __str__(self):
        return str(self.id)

    def generate_topic_exam(topic, questions, num_questions=50):
        new_exam = random.sample(questions, num_questions)
        return {
            "exam_id": uuid4(),
            "topic": topic,
            "questions": new_exam
        }

    def generate_general_exam(topics, questions):
        general_exam = []
        for topic in topics:
            general_exam.append(Question_Bank.generate_topic_exam(
                topic, questions["questions"], len(questions['questions']) - 10))
        return general_exam


class General_Exam:
    exam_id = fields.StringField(max_length=150)
    user = fields.StringField(max_length=200)
    questions = fields.ListField(fields.EmbeddedDocumentField(
        QuestionElement), null=True, blank=True)
    meta = {
        'db_alias': 'default',
        'collection': 'general_exams',
        'db': 'unam',
    }

    def __str__(self):
        return str(self.id)
