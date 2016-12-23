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
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import NavTabBars from './js/NavTabBars';
import HeaderBar from './js/HeaderBar';

var store = createStore(todoApp);

export default class Wordsmith extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HeaderBar title="Todos for Today"/>
          <NavTabBars />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('Wordsmith', () => Wordsmith);
