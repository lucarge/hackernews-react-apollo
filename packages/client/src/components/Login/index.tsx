import React, { useCallback, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { useMutation } from 'urql'
import { LOGIN_MUTATION } from 'api/mutations/login'
import { LoginMutation, LoginMutationVariables } from 'types'

export const Login = ({ history }: RouteComponentProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, executeLogin] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION)

  const login = useCallback(async () => {
    const result = await executeLogin({ email, password })

    if (result.error || !result.data || !result.data.login || !result.data.login.token) {
      return
    }

    localStorage.setItem('auth-token', result.data.login.token)

    history.push('/')
  }, [email, executeLogin, history, password])

  const goToSignup = useCallback(() => {
    history.replace('/signup')
  }, [history])

  return (
    <div>
      <h4 className="mv3">Login</h4>
      <div className="flex flex-column">
        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Your email address" />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Insert your password"
        />
      </div>
      <div className="flex mt3">
        <div className="pointer mr2 button" onClick={login}>
          login
        </div>
        <div className="pointer button" onClick={goToSignup}>
          need to create an account?
        </div>
      </div>
    </div>
  )
}

export default undefined
