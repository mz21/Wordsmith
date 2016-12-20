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
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Wordsmith extends Component {
  state = {
    selectedTab: 'todo',
  };

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">
        <Icon.TabBarItem
          title="Todo"
          iconName="check-box"
          selectedIconName="check-box"
          selected={this.state.selectedTab === 'todo'}
          onPress={() => {
           this.setState({
             selectedTab: 'todo',
           });
         }}
          >
          <View><Text>Home Tab</Text></View>
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
          <View><Text>Home Tab</Text></View>
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
          <View><Text>Home Tab</Text></View>
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
          <View><Text>Home Tab</Text></View>
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
          <View><Text>Profile</Text></View>
        </Icon.TabBarItem>
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
