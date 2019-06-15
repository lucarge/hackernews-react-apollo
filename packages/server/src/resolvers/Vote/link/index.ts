import { Context, Parent } from '@src/types'

export const link = (parent: Parent, _: unknown, context: Context) => {
  return context.prisma.vote({ id: parent.id }).link()
}

export default undefined
