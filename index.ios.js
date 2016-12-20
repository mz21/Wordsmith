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
import Icon from 'react-native-vector-icons/MaterialIcons';
import TodoPage from './js/pages/TodoPage'
import AddPage from './js/pages/AddPage'
import WordsPage from './js/pages/WordsPage'
import CalendarPage from './js/pages/CalendarPage'
import ProfilePage from './js/pages/ProfilePage'

export default class Wordsmith extends Component {
  state = {
    selectedTab: 'todo',
  };

  render() {
    return (
      <TabBarIOS
        tintColor="darkslateblue"
        barTintColor="rgb(249,249,249)">
        <Icon.TabBarItem
          title="Todo"
          iconName="check-box"
          selectedIconName="check-box"
          selected={this.state.selectedTab === 'todo'}
          onPress={() => {
           this.setState({
             selectedTab: 'todo',
           });
         }}>
          <TodoPage />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Add"
          iconName="add-circle-outline"
          selectedIconName="add-circle-outline"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
           this.setState({
             selectedTab: 'home',
           });
         }}
          >
          <AddPage />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Words"
          iconName="view-list"
          selectedIconName="view-list"
          selected={this.state.selectedTab === 'words'}
          onPress={() => {
           this.setState({
             selectedTab: 'words',
           });
         }}
          >
          <WordsPage />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Calendar"
          iconName="schedule"
          selectedIconName="schedule"
          selected={this.state.selectedTab === 'calendar'}
          onPress={() => {
           this.setState({
             selectedTab: 'calendar',
           });
         }}
          >
          <CalendarPage />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Profile"
          iconName="person"
          selectedIconName="person"
          selected={this.state.selectedTab === 'profile'}
          onPress={() => {
           this.setState({
             selectedTab: 'profile',
           });
         }}
          >
          <ProfilePage />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
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
