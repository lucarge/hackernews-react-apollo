import React, { useCallback } from 'react'
import { Mutation, MutationUpdaterFn } from 'react-apollo'
import { RouteComponentProps, withRouter } from 'react-router'
import { VOTE_MUTATION } from 'api/mutations/vote'
import { FEED_QUERY } from 'api/queries/feed'
import { FeedQuery, FeedQuery_feed_links, VoteMutation, VoteMutationVariables } from 'types'
import { getFeedQueryVariables } from 'utils/getFeedQueryVariables'
import { timeDifferenceForDate } from 'utils/timeDifferenceForDate'

type Props = RouteComponentProps<{ page: string }> & {
  index: number
  link: FeedQuery_feed_links
}

const LinkComponent = ({ index, location, match, link }: Props) => {
  const authToken = localStorage.getItem('auth-token')

  const handleCacheUpdate: MutationUpdaterFn<VoteMutation> = useCallback(
    (store, payload) => {
      const vote = payload.data ? payload.data.vote : undefined

      if (!vote) {
        return
      }

      const data = store.readQuery<FeedQuery>({
        query: FEED_QUERY,
        variables: getFeedQueryVariables(location, match),
      })

      if (!data) {
        return
      }

      store.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            ...data.feed,
            links: data.feed.links.map(currentLink => {
              if (currentLink.id !== link.id) {
                return currentLink
              }

              return {
                ...currentLink,
                votes: vote.link.votes,
              }
            }),
          },
        },
      })
    },
    [link, location, match]
  )

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
        {authToken && (
          <Mutation<VoteMutation, VoteMutationVariables>
            mutation={VOTE_MUTATION}
            update={handleCacheUpdate}
            variables={{ linkId: link.id }}
          >
            {voteMutation => (
              <button className="ml1 gray f11" onClick={() => voteMutation()}>
                ▲
              </button>
            )}
          </Mutation>
        )}
      </div>
      <div className="ml1">
        <div>
          {link.description} ({link.url})
        </div>
        <div className="f6 lh-copy gray">
          {link.votes.length} votes | by {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
          {timeDifferenceForDate(link.createdAt)}
        </div>
      </div>
    </div>
  )
}

export const Link = withRouter(LinkComponent)

export default undefined
