import React, { useCallback, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { useMutation } from 'urql'
import { SIGNUP_MUTATION } from 'api/mutations/signup'
import { SignupMutation, SignupMutationVariables } from 'types'

export const Signup = ({ history }: RouteComponentProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [, executeSignup] = useMutation<SignupMutation, SignupMutationVariables>(SIGNUP_MUTATION)

  const signup = useCallback(async () => {
    const result = await executeSignup({ email, name, password })

    if (result.error || !result.data || !result.data.signup || !result.data.signup.token) {
      return
    }

    localStorage.setItem('auth-token', result.data.signup.token)

    history.push('/')
  }, [email, executeSignup, history, name, password])

  const goToLogin = useCallback(() => {
    history.replace('/login')
  }, [history])

  return (
    <div>
      <h4 className="mv3">Sign Up</h4>
      <div className="flex flex-column">
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your name" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Your email address" />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <div className="pointer mr2 button" onClick={signup}>
          create account
        </div>
        <div className="pointer button" onClick={goToLogin}>
          already have an account?
        </div>
      </div>
    </div>
  )
}

export default undefined
