var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
import Icon from 'react-native-vector-icons/MaterialIcons'

class FilterTabs extends React.Component {
  props: {
  };
  render() {
    return (
      <View style={[styles.container, {width: 400}]}>
        <View style={[styles.filterTab, {backgroundColor: 'rgb(197,111,255)'}]}>
          <Icon name='sort-by-alpha' size={20} color='rgb(251,251,251)'/>
        </View>
        <View style={styles.filterTab}>
          <Icon name='access-time' size={20} color='rgb(197,111,255)'/>
        </View>
        <View style={styles.filterTab}>
          <Icon name='done-all' size={20} color='rgb(197,111,255)'/>
        </View>
      </View>
    );
  }
}

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
  }
});

module.exports = FilterTabs;
