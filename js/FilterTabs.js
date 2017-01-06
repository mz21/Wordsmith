var React = require('React');
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

class FilterTabs extends React.Component {
  props: {
    orderWords: React.PropTypes.func
  }
  state = {
    order: 'alphabetical'
  }
  render() {
    return (
      <View style={[styles.container, {width: 400}]}>
        <TouchableOpacity activeOpacity={0.75}
        onPress={() => { this.setState({order: 'alphabetical'}); this.props.orderWords('alphabetical') }}
        style={[styles.filterTab, this.state.order === 'alphabetical' ? styles.activeTab : null]}>
          <Icon name='sort-by-alpha' size={20}
          color={this.state.order === 'alphabetical' ? activeColor : inactiveColor}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.75}
        onPress={() => { this.setState({order: 'chronological'}); this.props.orderWords('chronological') }}
        style={[styles.filterTab, this.state.order === 'chronological' ? styles.activeTab : null]}>
          <Icon name='access-time' size={20}
          color={this.state.order === 'chronological' ? activeColor : inactiveColor}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.75}
        onPress={() => { this.setState({order: 'accuracy'}); this.props.orderWords('accuracy') }}
        style={[styles.filterTab, this.state.order === 'accuracy' ? styles.activeTab : null]}>
          <Icon name='done-all' size={20}
          color={this.state.order === 'accuracy' ? activeColor : inactiveColor}/>
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
