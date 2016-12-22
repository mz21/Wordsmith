var React = require('React');
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class Button extends React.Component {
  props: {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    text: React.PropTypes.string
  };
  render() {
    return (
      <TouchableOpacity style={[styles.button, {width: this.props.width, height: this.props.height}]}>
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
