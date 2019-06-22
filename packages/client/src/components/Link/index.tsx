import React, { useCallback } from 'react'
import { useMutation } from 'urql'
import { VOTE_MUTATION } from 'api/mutations/vote'
import { FeedQuery_feed_links, VoteMutation, VoteMutationVariables } from 'types'
import { timeDifferenceForDate } from 'utils/timeDifferenceForDate'

type Props = {
  index: number
  link: FeedQuery_feed_links
}

export const Link = ({ index, link }: Props) => {
  const authToken = localStorage.getItem('auth-token')
  const [, executeVote] = useMutation<VoteMutation, VoteMutationVariables>(VOTE_MUTATION)

  const vote = useCallback(async () => {
    await executeVote({ linkId: link.id })
  }, [executeVote, link])

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
        {authToken && (
          <button className="ml1 gray f11" onClick={vote}>
            ▲
          </button>
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
