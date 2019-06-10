import React, { useState } from 'react'
import { Mutation, MutationFn } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteComponentProps } from 'react-router'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

export const CreateLink = ({ history }: RouteComponentProps) => {
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')

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
      <Mutation mutation={POST_MUTATION} onCompleted={() => history.push('/')} variables={{ description, url }}>
        {(postMutation: MutationFn) => <button onClick={() => postMutation()}>Submit</button>}
      </Mutation>
    </div>
  )
}

export default undefined
