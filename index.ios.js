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
  View,
  TabBarIOS
} from 'react-native';
import NavBar from './js/NavBar'

export default class Wordsmith extends Component {
  state = {
    selectedTab: 'todo',
  };

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item title="Todo"
          systemIcon="bookmarks"
          selected={this.state.selectedTab === 'todo'}
          onPress={() => {
           this.setState({
             selectedTab: 'todo',
           });
          }}>
          <View>
            <Text>
              Todo
            </Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Add"
          systemIcon="most-viewed"
          selected={this.state.selectedTab === 'add'}
          onPress={() => {
           this.setState({
             selectedTab: 'add',
           });
          }}>
          <View>
            <Text>
              Add
            </Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Words"
          systemIcon="favorites"
          selected={this.state.selectedTab === 'words'}
          onPress={() => {
           this.setState({
             selectedTab: 'words',
           });
          }}>
          <View>
            <Text>
              Words
            </Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Calendar"
          systemIcon="top-rated"
          selected={this.state.selectedTab === 'calendar'}
          onPress={() => {
           this.setState({
             selectedTab: 'calendar',
           });
          }}>
          <View>
            <Text>
              Calendar
            </Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Profile"
          systemIcon="contacts"
          selected={this.state.selectedTab === 'profile'}
          onPress={() => {
           this.setState({
             selectedTab: 'profile',
           });
          }}>
          <View>
            <Text>
              Profile
            </Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
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

AppRegistry.registerComponent('Wordsmith', () => Wordsmith);
