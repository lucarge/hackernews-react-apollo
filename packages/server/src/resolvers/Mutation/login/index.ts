import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { APP_SECRET } from '@src/constants'
import { Context } from '@src/types'

type Args = {
  email: string
  password: string
}

export const login = async (_: unknown, args: Args, context: Context) => {
  const user = await context.prisma.user({ email: args.email })

  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)

  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}

export default undefined
