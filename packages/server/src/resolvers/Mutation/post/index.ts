import { Context } from '@src/types'
import { getUserId } from '@src/utils/getUserId'

type Args = {
  description: string
  url: string
}

export const post = (_: unknown, { url, description }: Args, context: Context) => {
  const userId = getUserId(context)
  return context.prisma.createLink({
    url,
    description,
    postedBy: {
      connect: {
        id: userId,
      },
    },
  })
}

export default undefined
