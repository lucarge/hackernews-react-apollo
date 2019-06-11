import React from 'react'
import { Route, Switch } from 'react-router'
import { CreateLink } from 'components/CreateLink'
import { Header } from 'components/Header'
import { LinkList } from 'components/LinkList'
import { Login } from 'components/Login'
import 'styles/App.css'

export const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  )
}

export default undefined
