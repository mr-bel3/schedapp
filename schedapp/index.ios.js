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
import LandingPage from './src/Components/LandingPage';

export default class schedapp extends Component {
  render() {
    debugger;
    return (
      <LandingPage/>
    );
  }
}


AppRegistry.registerComponent('schedapp', () => schedapp);
