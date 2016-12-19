var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');

class NavigationIcon extends React.Component {
  props: {
    name: string;
    image: string;
  };
  render() {
    return (
      <View>
        <Image source={this.props.image} style={{width: 40, height: 40}}/>
        <Text>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
  }
});

module.exports = NavigationIcon;
