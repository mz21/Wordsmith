var React = require('React');
import {TabBarIOS, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TodoPage from './pages/TodoPage'
import AddPage from './pages/AddPage'
import WordsPage from './pages/WordsPage'
import CalendarPage from './pages/CalendarPage'
import ProfilePage from './pages/ProfilePage'

class NavTabBars extends React.Component {
  state = {
    selectedTab: 'add',
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
          selected={this.state.selectedTab === 'add'}
          onPress={() => {
           this.setState({
             selectedTab: 'add',
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


var styles = StyleSheet.create({
});

module.exports = NavTabBars;
