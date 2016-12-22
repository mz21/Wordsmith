var React = require('React');
import {View, StyleSheet} from 'react-native';

export default class ProgressBar extends React.Component {
  props: {
    completed: React.PropTypes.number,
    total: React.PropTypes.number,
    length: React.PropTypes.number
  };
  render() {
    return (
      <View style={styles.progressBar}>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    width: this.props.length
  }
});
