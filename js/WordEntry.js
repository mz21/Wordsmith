var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');
var Image = require('Image');
var Dimensions = require('Dimensions');

var {width} = Dimensions.get('window');
class WordEntry extends React.Component {
  props: {
    word: React.PropTypes.string,
    image: React.PropTypes.string
  };
  render() {
    return (
      <View style={styles.wordEntry}>
        <Text style={styles.text}>
          {this.props.word}
        </Text>
        <Image style={styles.image} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}>

        </Image>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wordEntry: {
    borderBottomColor: 'rgb(220,220,220)',
    borderBottomWidth: 1,
    marginTop: 7,
    height: 47,
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    marginLeft: 5
  },
  image: {
    width: 30,
    height: 30
  }
});

module.exports = WordEntry;
