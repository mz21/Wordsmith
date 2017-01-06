import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import NavTabBars from '../containers/NavTabBars';
import HeaderBar from '../containers/HeaderBar';
import * as commons from '../../data/commons';

class InitialSetup extends React.Component {
  props: {
    timeOfLastUpdate: React.PropTypes.number,
    setTodos: React.PropTypes.func,
    setUpdatedTime: React.PropTypes.func,
    setWordList: React.PropTypes.func
  }
  componentWillMount() {
    this.props.setUpdatedTime().then(() => {
      let midnightToday = commons.convertToMidnight(new Date(Date.now()));
      var updated = true;
      if(this.props.timeOfLastUpdate < midnightToday) {
        updated = false;
      }
      this.props.setTodos(updated);
    });
    this.props.setWordList();
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar title="Todos for Today"/>
        <NavTabBars />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = InitialSetup
