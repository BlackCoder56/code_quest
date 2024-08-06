import graphene
import game.schema

class Query(game.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
