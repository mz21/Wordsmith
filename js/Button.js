var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')

class Button extends React.Component {
  render() {
    return (
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Start
        </Text>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  button: {
    borderColor: 'rgb(192,192,192)',
    borderWidth: 1,
    borderRadius: 3,
    width: 110,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Avenir Next'
  }
});

module.exports = Button;
