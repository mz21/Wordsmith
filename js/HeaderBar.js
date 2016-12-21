var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');
var Dimensions = require('Dimensions');

var {width} = Dimensions.get('window');
class HeaderBar extends React.Component {
  props: {
    title: React.PropTypes.string,
    width: React.PropTypes.number
  };
  render() {
    return (
      <View style={[styles.headerBar, {width: this.props.width}]}>
          <Text style={
            {
              height: 28,
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 14,
              fontWeight: '600',
              fontFamily: 'Avenir Next'
            }
          }>
            {this.props.title}
          </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'rgb(249,249,249)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(210,210,210, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});

module.exports = HeaderBar;
