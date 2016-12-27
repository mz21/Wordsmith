var React = require('React');
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class CircularButton extends React.Component {
  props: {
    size: React.PropTypes.number,
    text: React.PropTypes.string,
    color: React.PropTypes.string,
    onPress: React.PropTypes.func
  };
  render() {
    return (
      <TouchableOpacity style={[styles.button, {width: this.props.size, height: this.props.size, borderRadius: this.props.size / 2}]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}


var styles = StyleSheet.create({
  button: {
    borderColor: 'rgb(123,123,123)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Avenir Next'
  }
});
