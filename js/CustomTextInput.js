var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var TextInput = require('TextInput');

export default class CustomTextInput extends React.Component {
  props: {
    value: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  };
  render() {
    return (
      <View style={[styles.textInput, {width: this.props.width, height: this.props.height}]}>
        <TextInput value={this.props.value} style={[styles.text, {width: this.props.width, height: this.props.height}]} />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'rgb(221,221,221)',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'rgb(147,147,147)',
    fontFamily: 'Avenir Next',
    fontSize: 13,
    paddingLeft: 7
  }
});
