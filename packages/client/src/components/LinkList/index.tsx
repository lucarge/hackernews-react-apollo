import React from 'react'
import { Query } from 'react-apollo'
import { FEED_QUERY } from 'api/queries/feed'
import { Link } from 'components/Link'
import { Feed } from 'types'

export const LinkList = () => (
  <Query<Feed> query={FEED_QUERY}>
    {({ data, error, loading }) => {
      if (loading) {
        return <div>Loading</div>
      }

      if (error) {
        return <div>Error</div>
      }

      if (!data) {
        return null
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
