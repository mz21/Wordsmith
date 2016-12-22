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
import NavTabBars from './js/NavTabBars'
import TodoPage from './js/pages/TodoPage'
import AddPage from './js/pages/AddPage'
import WordsPage from './js/pages/WordsPage'
import CalendarPage from './js/pages/CalendarPage'
import ProfilePage from './js/pages/ProfilePage'

export default class Wordsmith extends Component {
  render() {
    return (
      <View style={styles.container}>
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
