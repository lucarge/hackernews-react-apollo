import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'components/Link'
import { Link as TLink } from 'types'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

type RenderProps = {
  data: {
    feed: {
      links: TLink[]
    }
  }
  error?: unknown
  loading: boolean
}

export const LinkList = () => (
  <Query query={FEED_QUERY}>
    {({ data, error, loading }: RenderProps) => {
      if (loading) {
        return <div>Loading</div>
      }

      if (error) {
        return <div>Error</div>
      }

      return (
        <>
          {data.feed.links.map(link => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )
    }}
  </Query>
)

export default undefined
