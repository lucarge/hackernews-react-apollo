import React, { useCallback } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

const HeaderComponent = ({ history }: RouteComponentProps) => {
  const authToken = localStorage.getItem('auth-token')

  const onLogout = useCallback(() => {
    localStorage.removeItem('auth-token')
    history.push('/')
  }, [history])

  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="ml1 no-underline black">
          new
        </Link>
        <div className="ml1">|</div>
        <Link to="/top" className="ml1 no-underline black">
          top
        </Link>
        <div className="ml1">|</div>
        <Link to="/search" className="ml1 no-underline black">
          search
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
              submit
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div className="ml1 pointer black" onClick={onLogout}>
            logout
          </div>
        ) : (
          <Link to="/login" className="ml1 no-underline black">
            login
          </Link>
        )}
      </div>
    </div>
  )
}

export const Header = withRouter(HeaderComponent)

export default undefined
