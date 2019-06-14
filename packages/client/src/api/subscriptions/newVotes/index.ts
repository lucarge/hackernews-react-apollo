import gql from 'graphql-tag'

export const NEW_VOTES_SUBSCRIPTION = gql`
  subscription NewVotesSubscription {
    newVote {
      id
      link {
        id
        url
        description
        createdAt
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
      user {
        id
      }
    }
  }
`

export default undefined
