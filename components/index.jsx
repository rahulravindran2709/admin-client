import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import Dashboard from 'Dashboard'
import Login from 'Login'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path='/' component={Login} />
      <Route path='dashboard' component={Dashboard} />
    </Router>
  ), document.getElementById('root')
)
