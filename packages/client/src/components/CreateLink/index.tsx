import React, { useCallback, useState } from 'react'
import { Mutation, MutationUpdaterFn } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import { FEED_QUERY } from 'api/queries/feed'
import { POST_MUTATION } from 'api/mutations/post'
import { PostMutation, PostMutationVariables, FeedQuery } from 'types'
import { getFeedQueryVariables } from 'utils/getFeedQueryVariables'

export const CreateLink = ({ history, location, match }: RouteComponentProps<{ page: string }>) => {
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')

  const handleCompleted = useCallback(() => {
    history.push('/')
  }, [history])

  const handleUpdate: MutationUpdaterFn<PostMutation> = useCallback(
    (store, payload) => {
      const post = payload.data ? payload.data.post : undefined

      if (!post) {
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
        data: {
          feed: {
            ...data.feed,
            links: [post, ...data.feed.links],
          },
        },
        query: FEED_QUERY,
        variables: getFeedQueryVariables(location, match),
      })
    },
    [location, match]
  )

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          value={url}
          onChange={e => setUrl(e.target.value)}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <Mutation<PostMutation, PostMutationVariables>
        mutation={POST_MUTATION}
        onCompleted={handleCompleted}
        update={handleUpdate}
        variables={{ description, url }}
      >
        {postMutation => <button onClick={() => postMutation()}>Submit</button>}
      </Mutation>
    </div>
  )
}

export default undefined
