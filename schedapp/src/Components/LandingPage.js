import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container, Content, Title, Header, Button} from 'native-base';

export default class LandingPage extends Component{
	render(){
	return(
 		<Container>
        <Header>
          <Title>Schedule up this bitch</Title>
        </Header>
        <Content>
          <Text>Welcome to Schedapp!</Text>
          <Button>Register an organization</Button>
          <Text>Already have a team?</Text>
          <Button> Sign In!</Button>
        </Content>
      </Container>
		);
}
}