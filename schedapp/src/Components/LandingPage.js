import React, { Component } from 'react';
import { Text } from 'react-native';
import {Container, Content, Title, Header, Button} from 'native-base';

export default class LandingPage extends Component{
	render(){
	return(
      <Container>
        <Content>
          <Text>Welcome to Schedapp!</Text>
          <Button>Register an organization</Button>
          <Text>Already have a team?</Text>
          <Button> Sign in!</Button>
        </Content>
      </Container>
		);
}
}