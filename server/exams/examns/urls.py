from django.urls import path
from .views import Question_Bank_Register, Topic_Exam_Register

urlpatterns = [
    path('', Question_Bank_Register.as_view()),
    path('generate-exam/<str:topic>/', Topic_Exam_Register.as_view()),
]
