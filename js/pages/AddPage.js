var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');
import SearchBar from '../SearchBar';
import CustomTextInput from '../CustomTextInput';
import Button from '../Button';
var Dimensions = require('Dimensions');

var {width, height} = Dimensions.get('window');
class AddPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <SearchBar text="Find Image via Google"/>
          <View style={styles.image}>
            <Text style={styles.imageText}>
              Images help you remember things
            </Text>
          </View>
          <CustomTextInput value='Enter the word (e.g. Bonjour)' width={width*0.7} height={35}/>
          <CustomTextInput value='Enter the translation (e.g. Hello)' width={width*0.7} height={35}/>
          <View style={styles.buttonSection}>
            <Button text="Add this Word" width={110} height={35}/>
            <Button text="Start Over" width={110} height={35} />
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    height: height * 0.78,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: width * 0.63,
    height: width * 0.63,
    backgroundColor: 'rgb(251,251,251)',
    borderColor: 'rgb(208,208,208)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageText: {
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    fontSize: 13,
    color: 'rgb(90,90,90)'
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 0.7 * width
  }
});

module.exports = AddPage;
