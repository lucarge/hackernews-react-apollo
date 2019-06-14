import gql from 'graphql-tag'

export const NEW_LINKS_SUBSCRIPTION = gql`
  subscription NewLinksSubscription {
    newLink {
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
  }
`

export default undefined
