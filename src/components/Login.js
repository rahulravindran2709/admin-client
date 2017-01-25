import React from 'react'
import App from 'grommet/components/App'
import LoginForm from 'grommet/components/LoginForm'
import Box from 'grommet/components/Box'
import 'grommet/scss/vanilla/index'
import LoginService from 'LoginService'
import Devtools from 'mobx-react-devtools'
import {observable} from 'mobx';
import {observer, inject} from 'mobx-react';

@inject('appState') @observer
class Login extends React.Component {
  constructor (props) {
    super(props)

    this.attemptLogin = this.attemptLogin.bind(this)
  }

  attemptLogin (data) {
    let loginService = new LoginService()
    let that = this

    loginService.fetch(data.username, data.password).then(function(response) {
      that.props.appState.authorization.token = response.auth_token
      that.props.router.push('/dashboard')
    })
  }

  render () {
    return (
      <App centered={false}>
        <Devtools />
        <Box align='center'>
          <LoginForm onSubmit={this.attemptLogin} title='GoDreams' secondaryText='Administration Interface'
            rememberMe />
        </Box>
      </App>
    )
  }
}

export default Login
