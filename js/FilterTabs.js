var React = require('React');
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as commons from '../data/commons'

class FilterTabs extends React.Component {
  props: {
    order: React.PropTypes.string,
    orderWords: React.PropTypes.func
  }
  render() {
    return (
      <View style={[styles.container, {width: 400}]}>
        <TouchableOpacity activeOpacity={0.75}
        onPress={() => { this.props.orderWords(commons.order.ALPHABETICAL) }}
        style={[styles.filterTab, this.props.order === commons.order.ALPHABETICAL ? styles.activeTab : null]}>
          <Icon name='sort-by-alpha' size={20}
          color={this.props.order === commons.order.ALPHABETICAL ? activeColor : inactiveColor}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.75}
        onPress={() => { this.props.orderWords(commons.order.CHRONOLOGICAL) }}
        style={[styles.filterTab, this.props.order === commons.order.CHRONOLOGICAL ? styles.activeTab : null]}>
          <Icon name='access-time' size={20}
          color={this.props.order === commons.order.CHRONOLOGICAL ? activeColor : inactiveColor}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.75}
        onPress={() => { this.props.orderWords(commons.order.ACCURACY) }}
        style={[styles.filterTab, this.props.order === commons.order.ACCURACY ? styles.activeTab : null]}>
          <Icon name='done-all' size={20}
          color={this.props.order === commons.order.ACCURACY ? activeColor : inactiveColor}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const inactiveColor = 'rgb(197,111,255)';
const activeColor = 'rgb(251,251,251)';

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filterTab: {
    borderColor: 'rgb(205,205,205)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 28
  },
  activeTab: {
    backgroundColor: 'rgb(197,111,255)',
  }
});

module.exports = FilterTabs;
