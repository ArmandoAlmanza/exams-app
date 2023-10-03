from django.urls import path
from .views import ExamRegister

urlpatterns = [
    path('', ExamRegister.as_view()),
]
