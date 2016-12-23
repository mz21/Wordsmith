var React = require('React');
import {View, Text, StyleSheet} from 'react-native';

export default class ProgressBar extends React.Component {
  props: {
    completed: React.PropTypes.number,
    total: React.PropTypes.number,
    length: React.PropTypes.number
  };

  render() {
    var width = (this.props.length * 1.0) / this.props.total;
    var completedCount = [];
    for(var i = 0; i < this.props.completed; i++) {
      completedCount.push(i);
    }

    const completed = completedCount.map((key) =>
      <View key={key} completed={true} style={[styles.bar, styles.completedBar, {width: width}]}></View>
    );
    var remainingCount = [];
    for(var i = this.props.completed; i < this.props.total; i++) {
      remainingCount.push(i);
    }
    const remaining = remainingCount.map((key) =>
      <View key={key} completed={false} style={[styles.bar, {width: width}]}></View>
    );
    return (
      <View style={[styles.progressBar, {width: this.props.length}]}>
        {completed}
        {remaining}
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
