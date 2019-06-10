import React from 'react'
import { Link as TLink } from 'types'

type Props = {
  link: TLink
}

export const Link = ({ link }: Props) => (
  <div>
    <span>{link.description}</span>
    <span>{link.url}</span>
  </div>
)

export default undefined
