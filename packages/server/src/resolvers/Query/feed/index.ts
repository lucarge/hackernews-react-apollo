import { LinkOrderByInput } from '@src/generated/prisma-client'
import { Context } from '@src/types'

type Args = {
  filter?: string
  first?: number
  orderBy?: LinkOrderByInput
  skip?: number
}

export const feed = async (_: unknown, args: Args, context: Context) => {
  const count = await context.prisma
    .linksConnection({
      where: {
        OR: [{ description_contains: args.filter }, { url_contains: args.filter }],
      },
    })
    .aggregate()
    .count()

  const links = await context.prisma.links({
    where: {
      OR: [{ description_contains: args.filter }, { url_contains: args.filter }],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })

  return { count, links }
}

export default undefined
