import React from 'react'
import { Mutation } from 'react-apollo'
import { VOTE_MUTATION } from 'api/mutations/vote'
import { Feed_feed_links, VoteMutation, VoteMutationVariables } from 'types'
import { timeDifferenceForDate } from 'utils/timeDifferenceForDate'

type Props = {
  index: number
  link: Feed_feed_links
}

export const Link = ({ index, link }: Props) => {
  const authToken = localStorage.getItem('auth-token')

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
        {authToken && (
          <Mutation<VoteMutation, VoteMutationVariables> mutation={VOTE_MUTATION} variables={{ linkId: link.id }}>
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

export default undefined
