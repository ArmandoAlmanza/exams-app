from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from examns.models import Question_Bank, General_Exam
from .serializers import Question_BankSerializer, General_Exam_Serializer


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


class General_Exam_Register(APIView):
    def get(self, request, *args, **kwargs):
        questions = Question_Bank.objects.filter(topic=kwargs.get("topic"))
        serializaers = Question_BankSerializer(questions, many=True)
        return Response(serializaers.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        question_bank = Question_Bank.objects.filter(
            topic=kwargs.get("topic"))

        topic_exam = Question_Bank.generate_topic_exam(
            topic=kwargs.get("topic"),
            questions=question_bank[0].questions,
            user=request.data.get("user"),
            num_questions=40)

        serializer = General_Exam_Serializer(data=topic_exam)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class QuestionBankRegister(APIView):
#     def get(self, request, *args, **kwargs):
#         questions = Question_Bank.objects.all()
#         serializaers = Question_BankSerializer(questions, many=True)
#         return Response(serializaers.data, status=status.HTTP_200_OK)

#     def post(self, request, *args, **kwargs):
#         serializer = Question_BankSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             print(request.data)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
