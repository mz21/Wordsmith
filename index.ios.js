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
import wordsmithApp from './data/reducers'
import NavTabBars from './js/containers/NavTabBars';
import HeaderBar from './js/containers/HeaderBar';

var store = createStore(wordsmithApp);

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
