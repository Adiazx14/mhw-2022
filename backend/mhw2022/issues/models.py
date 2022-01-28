from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class CustomUser(AbstractUser):
    name = models.TextField

    REQUIRED_FIELDS = ['name', 'email']

    def __str__(self):
        return self.email


class Issue(models.Model):
    issueID = models.CharField(max_length=20)
    assignedUsers = models.ManyToManyField(CustomUser)


