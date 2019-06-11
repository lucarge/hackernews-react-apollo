import React from 'react'
import gql from 'graphql-tag'
import { Mutation, MutationFn } from 'react-apollo'
import { timeDifferenceForDate } from 'utils/timeDifferenceForDate'

type Props = {
  index: number
  link: any // FIXME: graphql types generation
}

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`

export const Link = ({ index, link }: Props) => {
  const authToken = localStorage.getItem('auth-token')

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
        {authToken && (
          <Mutation mutation={VOTE_MUTATION} variables={{ linkId: link.id }}>
            {(voteMutation: MutationFn) => (
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
