var React = require('React');
import {View, Text, StyleSheet} from 'react-native';

export default class ProgressBar extends React.Component {
  props: {
    completed: React.PropTypes.number,
    total: React.PropTypes.number,
    length: React.PropTypes.number
  };

  render() {
    var completedWidth = this.props.completed * 1.0 / this.props.total;
    var remainingWidth = 1 - completedWidth;
    return (
      <View style={[styles.progressBar, {width: this.props.length}]}>
        <View width={this.props.length * completedWidth} style={styles.completedBar}>
        </View>
        <View width={this.props.length * remainingWidth} style={styles.bar}>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
  },
  bar: {
    backgroundColor: 'gray',
    height: 3,
    marginLeft: 0.5
  },
  completedBar: {
    backgroundColor: 'purple'
  }
});
