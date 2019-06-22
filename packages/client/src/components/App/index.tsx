import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { CreateLink } from 'components/CreateLink'
import { Header } from 'components/Header'
import { LinkList } from 'components/LinkList'
import { Login } from 'components/Login'
import { Search } from 'components/Search'
import { Signup } from 'components/Signup'
import 'styles/App.css'

export const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/new/1" />} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/top" component={LinkList} />
          <Route exact path="/new/:page" component={LinkList} />
        </Switch>
      </div>
    </div>
  )
}

export default undefined
