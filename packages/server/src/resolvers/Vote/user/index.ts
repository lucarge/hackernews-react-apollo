import { Context, Parent } from '@src/types'

export const user = (parent: Parent, _: unknown, context: Context) => {
  return context.prisma.vote({ id: parent.id }).user()
}

export default undefined
