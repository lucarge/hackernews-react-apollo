import { Context } from '@src/types'
import { getUserId } from '@src/utils/getUserId'

type Args = {
  linkId: string
}

export const vote = async (_: unknown, args: Args, context: Context) => {
  const userId = getUserId(context)

  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId },
  })

  if (linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } },
  })
}

export default undefined
