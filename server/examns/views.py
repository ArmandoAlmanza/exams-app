from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from examns.models import Exam
from .serializers import ExamSerializer


class ExamRegister(APIView):
    def get(self, request, *args, **kwargs):
        examns = Exam.objects.all()
        serializaers = ExamSerializer(examns, many=True)
        return Response(serializaers.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = ExamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
