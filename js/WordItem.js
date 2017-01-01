var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');
var Image = require('Image');
var Dimensions = require('Dimensions');

var {width} = Dimensions.get('window');
class WordItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
        <View style={styles.label}>
          <Text style={styles.textWord}>
            Vermelho
          </Text>
          <Text style={styles.textCaption}>
            78%  |  Next: 2 days
          </Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    borderBottomColor: 'rgb(200,200,200)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 20,
    paddingBottom: 10,
    width: 0.8 * width
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.6
  },
  textWord: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '600'
  },
  textCaption: {
    fontFamily: 'Avenir Next',
    fontSize: 12,
    fontWeight: '300'
  },
  image: {
    width: 42,
    height: 42
  }
});

module.exports = WordItem;
