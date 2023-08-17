from django.db import models

# Create your models here.

class Ebooks(models.Model):
    title = models.CharField(max_length=200)
