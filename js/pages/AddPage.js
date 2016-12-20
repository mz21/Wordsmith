var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');

class AddPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View>
        <Text>
          Add Button
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
  }
});

module.exports = AddPage;
