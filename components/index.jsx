import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import 'grommet/scss/vanilla/index'
import Main from 'Main'
import LoginForm from 'LoginForm'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path='/' component={Main} />
      <Route path='foo' component={LoginForm} />
    </Router>
  ), document.getElementById('root')
)
