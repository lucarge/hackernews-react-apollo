import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { split } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { OperationDefinitionNode, FragmentDefinitionNode } from 'graphql'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'components/App'
import 'styles/index.css'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth-token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000',
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem('auth-token'),
    },
  },
})

const isOperation = (
  queryDefinition: FragmentDefinitionNode | OperationDefinitionNode
): queryDefinition is OperationDefinitionNode => queryDefinition.kind === 'OperationDefinition'

const client = new ApolloClient({
  link: split(
    ({ query }) => {
      const queryDefinition = getMainDefinition(query)

      if (!isOperation(queryDefinition)) {
        return false
      }

      return queryDefinition.operation === 'subscription'
    },
    wsLink,
    authLink.concat(httpLink)
  ),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
