var React = require('React');
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class Button extends React.Component {
  props: {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    text: React.PropTypes.string,
    onPress: React.PropTypes.func
  };
  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.width ? {width: this.props.width} : null, this.props.height ? {height: this.props.height} : null]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}


var styles = StyleSheet.create({
  button: {
    borderColor: 'rgb(203,203,203)',
    borderWidth: 1,
    borderRadius: 3,
    width: 110,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Avenir Next'
  }
});

module.exports = Button;
