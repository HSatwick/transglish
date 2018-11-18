from rest_framework import serializers
from .models import Sentences
from googletrans import Translator, LANGUAGES


class SentenceSerializer(serializers.ModelSerializer):
    language = serializers.CharField(required=False)
    class Meta:
        model = Sentences
        fields = ('id', 'original_sentc', 'language', 'english_sentc', 'created')

    def create(self, validated_data):
        trans = Translator()
        data = trans.detect(validated_data['original_sentc'])
        validated_data['language'] = str(LANGUAGES.get(data.lang)).title()
        transglish = trans.translate(validated_data['original_sentc'], dest='en')
        validated_data['english_sentc'] = transglish.text
        return Sentences.objects.create(**validated_data)
    