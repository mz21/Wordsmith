var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');

class ProfilePage extends React.Component {
  props: {
  };
  render() {
    return (
      <View>
        <Text>
          Profile Page
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
  }
});

module.exports = ProfilePage;
