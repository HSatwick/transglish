from django.db import models
# Create your models here.


class Sentences(models.Model):
    original_sentc = models.TextField()
    language = models.CharField(max_length=100)
    english_sentc = models.TextField(default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return self.original_sentc