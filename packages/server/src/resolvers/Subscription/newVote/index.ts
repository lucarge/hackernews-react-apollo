import { Context } from '@src/types'

const newVoteSubscribe = (_: unknown, __: unknown, context: Context) => {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

export const newVote = {
  subscribe: newVoteSubscribe,
  resolve: (payload: unknown) => payload,
}

export default undefined
