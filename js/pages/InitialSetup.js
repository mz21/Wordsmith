import React from 'react';
import {StyleSheet, View} from 'react-native';
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
    commons.getUser().then((key) => {
      if(key) {
        commons.signInUser(key).then(() => {
          this.loadEverything()
        })
      }
      else {
        console.warn('key doesnt exist')
        commons.createUser().then(() => {
          this.loadEverything()
        })
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar title="Todos for Today"/>
        <NavTabBars />
      </View>
    )
  }
  loadEverything() {
    this.props.setUpdatedTime().then(() => {
      let midnightToday = commons.convertToMidnight(new Date(Date.now()));
      var alreadyBeenUpdatedToday = true;
      if(this.props.timeOfLastUpdate < midnightToday) {
        alreadyBeenUpdatedToday = false;
      }
      this.props.setTodos(alreadyBeenUpdatedToday);
    });

    this.props.setWordList();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = InitialSetup
