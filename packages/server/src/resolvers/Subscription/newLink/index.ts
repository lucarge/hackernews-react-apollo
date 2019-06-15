import { Context } from '@src/types'

const newLinkSubscribe = (_: unknown, __: unknown, context: Context) => {
  return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

export const newLink = {
  subscribe: newLinkSubscribe,
  resolve: (payload: unknown) => payload,
}

export default undefined
