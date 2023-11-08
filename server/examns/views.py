from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from uuid import uuid4
import random

from examns.models import Question_Bank, Topic_Exam
from .serializers import Question_BankSerializer, Topic_Exam_Serializer


class Question_Bank_Register(APIView):
    def get(self, request, *args, **kwargs):
        questions = Question_Bank.objects.all()
        serializaers = Question_BankSerializer(questions, many=True)
        return Response(serializaers.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = Question_BankSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class Topic_Exam_Register(APIView):
    def get(self, request, *args, **kwargs):
        questions = Topic_Exam.objects.filter(topic=kwargs.get("topic"))
        serializaers = Topic_Exam_Serializer(questions, many=True)
        return Response(serializaers.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        question_bank = Question_Bank.objects.filter(topic=kwargs.get("topic"))

        # Crear una lista de diccionarios en lugar de instancias de QuestionElement
        topic_exam = [
            {
                "correct_answer": question.correct_answer,
                "question": question.question,
                "options": question.options
            }
            for question in random.sample(question_bank[0].questions, 30)
        ]

        serializer = Topic_Exam_Serializer(data={
            "exam_id": str(uuid4()),
            "topic": kwargs.get("topic"),
            "user": request.data.get("user"),
            "questions": topic_exam
        })

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
