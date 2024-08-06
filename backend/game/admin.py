from django.contrib import admin
from .models import Level, Challenge

@admin.register(Level)
class LevelAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

@admin.register(Challenge)
class ChallengeAdmin(admin.ModelAdmin):
    list_display = ('level', 'prompt', 'solution')
