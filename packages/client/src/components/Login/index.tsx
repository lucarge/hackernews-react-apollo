import React, { useCallback, useState } from 'react'
import { Mutation } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import { LOGIN_MUTATION } from 'api/mutations/login'
import { SIGNUP_MUTATION } from 'api/mutations/signup'
import { LoginMutation, LoginMutationVariables, SignupMutation, SignupMutationVariables } from 'types'

const isLogin = (data: LoginMutation | SignupMutation): data is LoginMutation => Object.keys(data).includes('login')

const getToken = (data: LoginMutation | SignupMutation) => {
  if (isLogin(data)) {
    return data.login ? data.login.token : undefined
  }

  return data.signup ? data.signup.token : undefined
}

export const Login = ({ history }: RouteComponentProps) => {
  const [login, setLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const confirm = useCallback(
    (data: LoginMutation | SignupMutation) => {
      const token = getToken(data)

      if (!token) {
        return
      }

      localStorage.setItem('auth-token', token)

      history.push('/')
    },
    [history]
  )

  return (
    <div>
      <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
      <div className="flex flex-column">
        {!login && <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your name" />}
        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Your email address" />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <Mutation<LoginMutation | SignupMutation, LoginMutationVariables | SignupMutationVariables>
          mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
          variables={{ email, password, name }}
          onCompleted={confirm}
        >
          {mutation => (
            <div className="pointer mr2 button" onClick={() => mutation()}>
              {login ? 'login' : 'create account'}
            </div>
          )}
        </Mutation>
        <div className="pointer button" onClick={() => setLogin(!login)}>
          {login ? 'need to create an account?' : 'already have an account?'}
        </div>
      </div>
    </div>
  )
}

export default undefined
