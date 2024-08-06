from django.db import models

class Level(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title

class Challenge(models.Model):
    level = models.ForeignKey(Level, related_name='challenges', on_delete=models.CASCADE)
    prompt = models.TextField()
    solution = models.TextField()

    def __str__(self):
        return self.prompt
