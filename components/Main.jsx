import React from 'react';
import App from 'grommet/components/App';
import LoginForm from './LoginForm.jsx'
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter';
import Title from 'grommet/components/Title';

export default class Main extends React.Component {
  render() {
    return (
      <App centered={false}>
        <LoginForm/>

        <Header direction="row" justify="between" pad={{horizontal: 'medium'}}>
          <Title>Grommet standalone</Title>
        </Header>

        <Box pad='medium'>
          <Meter value={40}/>
        </Box>

        <Footer primary={true} appCentered={true} direction="column"
                align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!
          </p>
        </Footer>
      </App>
    );
  }
}
