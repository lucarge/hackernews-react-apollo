import React, { useCallback } from 'react'
import { ObservableQuery } from 'apollo-client'
import { Query } from 'react-apollo'
import { FEED_QUERY } from 'api/queries/feed'
import { NEW_LINKS_SUBSCRIPTION } from 'api/subscriptions/newLinks'
import { NEW_VOTES_SUBSCRIPTION } from 'api/subscriptions/newVotes'
import { Link } from 'components/Link'
import { Feed, NewLinksSubscription, NewVotesSubscription } from 'types'

export const LinkList = () => {
  const subscribeToUpdates = useCallback((subscribeToMore: ObservableQuery['subscribeToMore']) => {
    subscribeToMore<NewVotesSubscription>({
      document: NEW_VOTES_SUBSCRIPTION,
    })

    subscribeToMore<NewLinksSubscription>({
      document: NEW_LINKS_SUBSCRIPTION,
      updateQuery: (previous: Feed, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previous
        }

        const newLink = subscriptionData.data.newLink

        if (!newLink) {
          return previous
        }

        if (previous.feed.links.find(({ id }) => id === newLink.id)) {
          return previous
        }

        return {
          ...previous,
          feed: {
            __typename: previous.feed.__typename,
            links: [newLink, ...previous.feed.links],
            count: previous.feed.links.length + 1,
          },
        }
      },
    })
  }, [])

  return (
    <Query<Feed> query={FEED_QUERY}>
      {({ data, error, loading, subscribeToMore }) => {
        if (loading) {
          return <div>Loading</div>
        }

        if (error) {
          return <div>Error</div>
        }

        if (!data) {
          return null
        }

        subscribeToUpdates(subscribeToMore)

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
}

export default undefined
