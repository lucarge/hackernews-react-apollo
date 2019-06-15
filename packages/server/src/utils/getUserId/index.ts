import jwt from 'jsonwebtoken'
import { APP_SECRET } from '@src/constants'
import { Context } from '@src/types'

export const getUserId = (context: Context) => {
  const Authorization = context.request.get('Authorization')

  if (!Authorization) {
    throw new Error('Not authenticated')
  }

  const token = Authorization.replace('Bearer ', '')
  const { userId } = jwt.verify(token, APP_SECRET) as { userId: string }

  return userId
}

export default undefined
