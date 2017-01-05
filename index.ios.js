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
import { createStore, applyMiddleware } from 'redux'
import wordsmithApp from './data/reducers';
import InitialSetup from './js/containers/pages/InitialSetup';
import thunkMiddleware from 'redux-thunk';

var store = createStore(wordsmithApp, applyMiddleware(thunkMiddleware));

export default class Wordsmith extends Component {
  render() {
    return (
      <Provider store={store}>
        <InitialSetup />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Wordsmith', () => Wordsmith);
