var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');

class TodoPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View>
        <Text>
          Todo Page
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
  }
});

module.exports = TodoPage;
