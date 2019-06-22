import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { createClient, Provider } from 'urql'
import { App } from 'components/App'
import 'styles/index.css'

const getHeaders = () => {
  const token = localStorage.getItem('auth-token')

  return {
    authorization: token ? `Bearer ${token}` : '',
  }
}

const client = createClient({
  fetchOptions: () => ({
    headers: getHeaders(),
  }),
  url: 'http://localhost:4000',
})

ReactDOM.render(
  <BrowserRouter>
    <Provider value={client}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
