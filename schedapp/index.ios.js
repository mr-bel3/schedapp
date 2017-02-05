/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container, Content, Title, Header, Button} from 'native-base';

export default class schedapp extends Component {
  render() {
  	debugger;
    return (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('schedapp', () => schedapp);
