var React = require('React');
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import CustomTextInput from '../CustomTextInput';
import Button from '../Button';

var {width, height} = Dimensions.get('window');
export default class AddPageForm extends React.Component {
  props: {
    addWord: React.PropTypes.func
  }
  state = {
    imagePath: '',
    translation: '',
    word: ''
  }
  render() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.image}>
          <Text style={styles.imageText}>
            Images help you remember things
          </Text>
        </View>
        <CustomTextInput placeholder='Enter the word (e.g. Bonjour)' width={width*0.7} height={35} onChangeText={this.onChangeWord}/>
        <CustomTextInput placeholder='Enter the translation (e.g. Hello)' width={width*0.7} height={35} onChangeText={this.onChangeTranslation}/>
        <View style={styles.buttonSection}>
          <Button text="Add this Word" width={110} height={35} onPress={() => { this.props.addWord(this.state);}}/>
          <Button text="Start Over" width={110} height={35} />
        </View>
      </View>
    )
  }
  //when you reviewed and success or failure
  onChangeTranslation = (text) => {
    this.setState({translation: text});
  }
  onChangeWord = (text) => {
    this.setState({word: text});
  }
}

var styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor: 'rgb(252,252,252)',
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
  },
});
