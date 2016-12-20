var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');

class CalendarPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View>
        <Text>
          Calendar Button
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
  }
});

module.exports = CalendarPage;
