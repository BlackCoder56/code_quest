import graphene
from graphene_django import DjangoObjectType
from .models import Level, Challenge

class LevelType(DjangoObjectType):
    class Meta:
        model = Level

class ChallengeType(DjangoObjectType):
    class Meta:
        model = Challenge

class Query(graphene.ObjectType):
    all_levels = graphene.List(LevelType)
    all_challenges = graphene.List(ChallengeType)

    def resolve_all_levels(self, info, **kwargs):
        return Level.objects.all()

    def resolve_all_challenges(self, info, **kwargs):
        return Challenge.objects.all()

schema = graphene.Schema(query=Query)
