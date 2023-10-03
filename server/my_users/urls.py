from django.urls import path
from .views import UserRegister

urlpatterns = [
    path('', UserRegister.as_view()),
]
