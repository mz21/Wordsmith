/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import NavTabBars from './js/NavTabBars';
import HeaderBar from './js/HeaderBar';


export default class Wordsmith extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar title="Todos for Today"/>
        <NavTabBars />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('Wordsmith', () => Wordsmith);
