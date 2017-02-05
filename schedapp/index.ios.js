/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Content, Header, Title } from 'native-base';
import LandingPage from './src/Components/LandingPage';
import Task from './src/Components/Task';

export default class schedapp extends Component {
  render() {
    debugger;
    return (
        <Container>
        <Header>
          <Title>Schedapp</Title>
        </Header>
        <Content>
            <LandingPage/>
        </Content>
        </Container>
        );
  }
}


AppRegistry.registerComponent('schedapp', () => schedapp);
