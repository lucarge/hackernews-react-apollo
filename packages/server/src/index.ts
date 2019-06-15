import { GraphQLServer } from 'graphql-yoga'
import { prisma } from '@src/generated/prisma-client'
import Query from '@src/resolvers/Query'
import Mutation from '@src/resolvers/Mutation'
import Subscription from '@src/resolvers/Subscription'
import User from '@src/resolvers/User'
import Link from '@src/resolvers/Link'
import Vote from '@src/resolvers/Vote'

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
