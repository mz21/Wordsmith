var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');
import SearchBar from '../SearchBar'

class AddPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View>
        <SearchBar text="Find Image via Google"/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
  }
});

module.exports = AddPage;
