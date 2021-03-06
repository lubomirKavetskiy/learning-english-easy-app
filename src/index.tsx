import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const EnhanceApp = process.env.NODE_ENV === 'development' ? hot(App) : App
console.log(process.env.NODE_ENV)
ReactDOM.render(
  <React.StrictMode>
    <EnhanceApp />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
