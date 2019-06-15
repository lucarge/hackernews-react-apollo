import { Context, Parent } from '@src/types'

export const postedBy = (parent: Parent, _: unknown, context: Context) => {
  return context.prisma.link({ id: parent.id }).postedBy()
}

export default undefined
