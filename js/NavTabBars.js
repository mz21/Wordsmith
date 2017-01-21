var React = require('React');
import {TabBarIOS} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddPage from './containers/pages/AddPage'
import WordsPage from './containers/pages/WordsPage'
import CalendarPage from './pages/CalendarPage'
import ProfilePage from './pages/ProfilePage'
import SmartTodoNav from './containers/pages/TodoNav'
import * as tabs from '../data/commons'

class NavTabBars extends React.Component {
  props: {
    tab: React.PropTypes.string
  }
  render() {
    return (
      <TabBarIOS
        tintColor="darkslateblue"
        barTintColor="rgb(249,249,249)">
        <Icon.TabBarItem
          title="Todo"
          iconName="check-box"
          selectedIconName="check-box"
          selected={this.props.tab === tabs.TODO}
          onPress={() => {
            this.setState({
              selectedTab: tabs.TODO
            });
            this.props.onTab(tabs.TODO)
         }}>
          <SmartTodoNav />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Add"
          iconName="add-circle-outline"
          selectedIconName="add-circle-outline"
          selected={this.props.tab === tabs.ADD}
          onPress={() => {
           this.setState({
             selectedTab: tabs.ADD,
           });
           this.props.onTab(tabs.ADD)
         }}
          >
          <AddPage />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Words"
          iconName="view-list"
          selectedIconName="view-list"
          selected={this.props.tab === tabs.WORDS}
          onPress={() => {
           this.setState({
             selectedTab: tabs.WORDS,
           });
           this.props.onTab(tabs.WORDS)
         }}
          >
          <WordsPage />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Profile"
          iconName="person"
          selectedIconName="person"
          selected={this.props.tab === tabs.PROFILE}
          onPress={() => {
           this.setState({
             selectedTab: tabs.PROFILE,
           });
           this.props.onTab(tabs.PROFILE)
         }}
          >
          <ProfilePage />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

module.exports = NavTabBars;
