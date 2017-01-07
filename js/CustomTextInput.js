var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var TextInput = require('TextInput');

export default class CustomTextInput extends React.Component {
  props: {
    placeholder: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    onChangeText: React.PropTypes.string
  };
  render() {
    return (
      <View style={[styles.textInput, {width: this.props.width, height: this.props.height}]}>
        <TextInput autoCapitalize='none' autoCorrect={false} placeholder={this.props.placeholder}
        onChangeText={(text) => {this.props.onChangeText(text)}}
        style={[styles.text, {width: this.props.width, height: this.props.height}]} />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'rgb(221,221,221)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginLeft: 1 //needed for cursor to show
  },
  text: {
    color: 'rgb(35,35,35)',
    fontFamily: 'Avenir Next',
    fontSize: 13,
    paddingLeft: 10
  }
});
