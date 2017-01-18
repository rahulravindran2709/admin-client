import React from 'react'
import App from 'grommet/components/App'
import LoginForm from 'grommet/components/LoginForm';
import Box from 'grommet/components/Box';
import 'grommet/scss/vanilla/index'

export default class Login extends React.Component {
  constructor (props) {
    super(props)

    this.attemptLogin = this.attemptLogin.bind(this)
  }

  attemptLogin (data) {
    console.log('Attempt login with');
    console.log(data);
  }

  render () {
    return (
      <App centered={false}>
        <Box align="center">
          <LoginForm onSubmit={ this.attemptLogin } title='GoDreams' secondaryText='Administration Interface'
                     rememberMe={true} />
        </Box>
      </App>
    )
  }
}
