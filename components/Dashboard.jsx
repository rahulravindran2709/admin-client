import React from 'react'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Footer from 'grommet/components/Footer'
import Meter from 'grommet/components/Meter'
import Title from 'grommet/components/Title'
import {Link} from 'react-router'

export default class Dashboard extends React.Component {
  render () {
    return (
      <App centered={false}>
        <Header direction='row' justify='between' pad={{horizontal: 'medium'}}>
          <Title>Grommet standalone</Title>
        </Header>

        <Box pad='medium'>
          <Meter value={40} />
        </Box>

        <Link to={`/foo`}>Show me only the login form</Link>

        <Footer primary appCentered direction='column' align='center' pad='small' colorIndex='grey-1'>
          <p>
            Build your ideas with <a href='http://grommet.io' target='_blank'>Grommet</a>!
          </p>
        </Footer>
      </App>
    )
  }
}