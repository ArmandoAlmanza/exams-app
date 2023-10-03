from rest_framework_mongoengine.serializers import DocumentSerializer
from .models import MyUser

class MyUserSerializer(DocumentSerializer):
    class Meta:
        model = MyUser
        fields = '__all__'