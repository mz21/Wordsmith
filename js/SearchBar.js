var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');
var Dimensions = require('Dimensions');

var {width} = Dimensions.get('window');
class SearchBar extends React.Component {
  props: {
    text: React.PropTypes.string,
  };
  render() {
    return (
      <View style={styles.searchBar}>
        <Text style={styles.searchBarText}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'rgb(250,250,251)',
    borderColor: 'rgb(216,216,216)',
    borderRadius: 5,
    borderWidth: 1,
    height: 25,
    width: 0.72 * width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchBarText: {
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    fontSize: 11,
    color: 'rgb(92,92,92)'
  }
});

module.exports = SearchBar;
