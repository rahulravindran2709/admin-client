import React from 'react'
import App from 'grommet/components/App'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import {observer, inject} from 'mobx-react';
import UserService from 'UserService'
import {observable} from 'mobx'

@inject('appState') @observer
export default class Dashboard extends React.Component {
  @observable userName = 'Loading...'

  componentDidMount () {
    let userService = new UserService(this.props.appState.authorization.token)
    let that = this

    userService.fetch().then(function (response) {
      that.userName = response.name
    })
  }

  render () {
    return (
      <App centered={false}>
        <Header direction='row' justify='between' pad={{horizontal: 'medium'}}>
          <Title>GoDreams Admin Interface</Title>
        </Header>

        Logged in user's name is: { this.userName }
      </App>
    )
  }
}
