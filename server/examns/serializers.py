from rest_framework_mongoengine.serializers import DocumentSerializer, EmbeddedDocumentSerializer
from .models import Exam, QuestionElement


class QuestionElementSerializer(EmbeddedDocumentSerializer):
    class Meta:
        model = QuestionElement
        fields = '__all__'


class ExamSerializer(DocumentSerializer):
    questions = QuestionElementSerializer(many=True)

    class Meta:
        model = Exam
        fields = '__all__'

    def create(self, validated_data):
        questions_data = validated_data.pop('questions')
        exam = Exam.objects.create(**validated_data)

        # Verificamos si el campo 'questions' es None y, de ser así, lo inicializamos como una lista vacía
        if exam.questions is None:
            exam.questions = []

        for question_data in questions_data:
            # Creamos un objeto QuestionElement y lo adjuntamos al examen
            question = QuestionElement(**question_data)
            exam.questions.append(question)

        exam.save()  # Guardamos el examen con las preguntas
        return exam
