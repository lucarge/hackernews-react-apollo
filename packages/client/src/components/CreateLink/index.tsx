import React, { useCallback, useState } from 'react'
import { Mutation } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import { POST_MUTATION } from 'api/mutations/post'
import { PostMutation, PostMutationVariables } from 'types'

export const CreateLink = ({ history }: RouteComponentProps) => {
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')

  const handleCompleted = useCallback(() => {
    history.push('/')
  }, [history])

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
        variables={{ description, url }}
      >
        {postMutation => <button onClick={() => postMutation()}>Submit</button>}
      </Mutation>
    </div>
  )
}

export default undefined
