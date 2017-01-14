var React = require('React');
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class Button extends React.Component {
  props: {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    textColor: React.PropTypes.string,
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
    disabled: React.PropTypes.bool
  };
  render() {
    let width = this.props.width ? {width: this.props.width} : null
    let height = this.props.height ? {height: this.props.height} : null
    let backgroundColor = this.props.backgroundColor ? {backgroundColor: this.props.backgroundColor} : null
    let textColor = this.props.textColor ? {color: this.props.textColor} : null
    return (
      <TouchableOpacity disabled={this.props.disabled} style={[styles.button, width, height, backgroundColor]} onPress={this.props.onPress}>
        <Text style={[styles.buttonText, textColor]}>
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
    fontFamily: 'Avenir Next',
    fontWeight: '600'
  }
});

module.exports = Button;
