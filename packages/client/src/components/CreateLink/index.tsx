import React, { useCallback, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { useMutation } from 'urql'
import { POST_MUTATION } from 'api/mutations/post'
import { PostMutation, PostMutationVariables } from 'types'

export const CreateLink = ({ history }: RouteComponentProps<{ page: string }>) => {
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [, executePost] = useMutation<PostMutation, PostMutationVariables>(POST_MUTATION)

  const createLink = useCallback(async () => {
    const result = await executePost({ description, url })

    if (result.error) {
      return
    }

    history.push('/')
  }, [description, executePost, history, url])

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
      <button onClick={createLink}>Submit</button>
    </div>
  )
}

export default undefined
