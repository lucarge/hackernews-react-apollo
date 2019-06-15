import { Context, Parent } from '@src/types'

export const links = (parent: Parent, _: unknown, context: Context) => {
  return context.prisma.user({ id: parent.id }).links()
}

export default undefined
