from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import SentenceSerializer
from .models import Sentences


class SentenceView(APIView):

    def get(self, request):
        queryset = Sentences.objects.all().order_by('-created')
        serializer = SentenceSerializer(queryset, many=True)
        return Response(serializer.data)

    #Using the GoogleTrans API to detect and translate
    def post(self, request):
        serialized_data = SentenceSerializer(data=request.data)
        if serialized_data.is_valid():
            serialized_data.save()
            return Response(serialized_data.data, status=status.HTTP_201_CREATED)
        return Response(serialized_data.error, status=status.HTTP_400_BAD_REQUEST)

class DetailedView(APIView):

    def get(self, request, **kwargs):
        queryset = Sentences.objects.all().filter(id=kwargs.get('id'))
        serializer = SentenceSerializer(queryset, many=True)
        return Response(serializer.data)