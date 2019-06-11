import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'components/Link'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

type RenderProps = {
  data: {
    feed: {
      links: any[] // FIXME: graphql type generation
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
          {data.feed.links.map((link, index) => (
            <Link key={link.id} link={link} index={index} />
          ))}
        </>
      )
    }}
  </Query>
)

export default undefined
