import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { APP_SECRET } from '@src/constants'
import { UserCreateInput } from '@src/generated/prisma-client'
import { Context } from '@src/types'

export const signup = async (_: unknown, args: UserCreateInput, context: Context) => {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return { token, user }
}

export default undefined
