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
import WordsmithNavigator from './js/WordsmithNavigator';
import NavTabBars from './js/NavTabBars';

export default class Wordsmith extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WordsmithNavigator />
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
