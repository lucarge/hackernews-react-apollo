import React, { useCallback } from 'react'
import { ObservableQuery } from 'apollo-client'
import { Query } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import { FEED_QUERY } from 'api/queries/feed'
import { NEW_LINKS_SUBSCRIPTION } from 'api/subscriptions/newLinks'
import { NEW_VOTES_SUBSCRIPTION } from 'api/subscriptions/newVotes'
import { Link } from 'components/Link'
import { FeedQuery, FeedQueryVariables, NewLinksSubscription, NewVotesSubscription } from 'types'
import { isNewPage } from 'utils/isNewPage'
import { getPageIndex } from 'utils/getPageIndex'
import { getFeedQueryVariables } from 'utils/getFeedQueryVariables'

export const LinkList = ({ history, location, match }: RouteComponentProps<{ page: string }>) => {
  const feedQueryVariables = getFeedQueryVariables(location, match)

  const goBack = useCallback(() => {
    const page = parseInt(match.params.page, 10)

    if (isNaN(page) || page <= 1) {
      return
    }

    history.push(`/new/${page - 1}`)
  }, [history, match.params.page])

  const goForward = useCallback(
    (data: FeedQuery) => {
      const page = parseInt(match.params.page, 10)

      if (isNaN(page) || page > data.feed.count / 5) {
        return
      }

      history.push(`/new/${page + 1}`)
    },
    [history, match.params.page]
  )

  const subscribeToUpdates = useCallback((subscribeToMore: ObservableQuery['subscribeToMore']) => {
    subscribeToMore<NewVotesSubscription>({
      document: NEW_VOTES_SUBSCRIPTION,
    })

    subscribeToMore<NewLinksSubscription>({
      document: NEW_LINKS_SUBSCRIPTION,
      updateQuery: (previous: FeedQuery, { subscriptionData }) => {
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
    <Query<FeedQuery, FeedQueryVariables> query={FEED_QUERY} variables={feedQueryVariables}>
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

        const linksToRender = isNewPage(location)
          ? data.feed.links
          : data.feed.links.slice().sort((l1, l2) => l2.votes.length - l1.votes.length)

        const pageIndex = getPageIndex(location, match)

        return (
          <>
            {linksToRender.map((link, index) => (
              <Link key={link.id} link={link} index={index + pageIndex} />
            ))}

            {isNewPage(location) && (
              <div className="flex ml4 mv3 gray">
                <div className="pointer mr2" onClick={goBack}>
                  Previous
                </div>
                <div className="pointer" onClick={() => goForward(data)}>
                  Next
                </div>
              </div>
            )}
          </>
        )
      }}
    </Query>
  )
}

export default undefined
