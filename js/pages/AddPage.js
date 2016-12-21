var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');
import HeaderBar from '../HeaderBar';
import SearchBar from '../SearchBar';
import CustomTextInput from '../CustomTextInput';
import Button from '../Button';
var Dimensions = require('Dimensions');

var {width} = Dimensions.get('window');
class AddPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar title="Add a Word" width={width}/>
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
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
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
