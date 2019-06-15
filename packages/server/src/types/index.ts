import { ContextParameters } from 'graphql-yoga/dist/types'
import { ID_Input, Prisma } from '@src/generated/prisma-client'

export type Context = ContextParameters & { prisma: Prisma }

export type Parent = {
  id: ID_Input
}

export default undefined
