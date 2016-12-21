var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');

class CustomTextInput extends React.Component {
  props: {
    value: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  };
  render() {
    return (
      <View style={[styles.textInput, {width: this.props.width, height: this.props.height}]}>
        <Text style={styles.text}>
          {this.props.value}
        </Text>
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

module.exports = CustomTextInput;
