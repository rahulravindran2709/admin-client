import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  attemptLogin() {
    console.log("Attempt login with " + this.state.email + " and " + this.state.password)
  }

  render() {
    return(
      <div>
        <input onChange={ this.handleEmailChange } placeholder="Email address"/>
        <input type="password" onChange={ this.handlePasswordChange } placeholder="Password"/>
        <button onClick={ this.attemptLogin }>Login</button>
      </div>
    )
  }
}
