var React = require('React');
import {StyleSheet, View, Text, Image, Dimensions, Alert} from 'react-native';
import CustomTextInput from '../CustomTextInput';
import Button from '../Button';
import * as commons from '../../data/commons'

var {width, height} = Dimensions.get('window');
export default class AddPageForm extends React.Component {
  props: {
    addWord: React.PropTypes.func,
    thumbnailUrl: React.PropTypes.string,
    fullUrl: React.PropTypes.string,
    word: React.PropTypes.string,
    translation: React.PropTypes.string,
    editMode: React.PropTypes.bool,
    changeWord: React.PropTypes.func,
    changeTranslation: React.PropTypes.func,
    startOver: React.PropTypes.func,
  }
  state = {
    text: this.props.word ? this.props.word : ''
  }
  render() {
    let imageBlock = null;
    if(this.props.fullUrl) {
      imageBlock = <Image source={{uri: this.props.fullUrl}}
        style={styles.image} />
    }
    else {
      imageBlock = <View style={[styles.image, styles.blankImage]}>
                    <Text style={styles.imageText}>
                      Images help you remember things
                    </Text>
                  </View>
    }

    let buttonDisabled = null;
    if(this.state.text.length > 0) {
      buttonDisabled = false
    }
    else {
      buttonDisabled = true
    }

    let buttonSection = null;
    if(true || this.props.editMode) {
      buttonSection =
      <View style={styles.buttonSection}>
        <Button text="Save this Word" backgroundColor={commons.MED_PURPLE} textColor='rgb(251,251,251)' width={110} height={35} onPress={() =>
            {
              this.props.addWord({
                word: this.props.word,
                translation: this.props.translation,
                thumbnailUrl: this.props.thumbnailUrl,
                fullUrl: this.props.fullUrl,
              });
          }}/>
        <Button text="Delete" width={110} height={35} backgroundColor={commons.RED} textColor='rgb(251,251,251)' onPress={this.onDeleteWord}/>
      </View>
    }
    else {
      buttonSection =
      <View style={styles.buttonSection}>
        <Button disabled={buttonDisabled} text="Add this Word" backgroundColor={buttonDisabled ? commons.DISABLED_GRAY : commons.MED_PURPLE} textColor='rgb(251,251,251)' width={110} height={35} onPress={() =>
            {
              this.props.addWord({
                word: this.props.word,
                translation: this.props.translation,
                thumbnailUrl: this.props.thumbnailUrl,
                fullUrl: this.props.fullUrl,
              });
              this.props.startOver();
          }}/>
        <Button text="Start Over" width={110} height={35} backgroundColor='rgb(252,252,252)' onPress={this.props.startOver}/>
      </View>
    }
    return (
      <View style={styles.formContainer}>
        {imageBlock}
        <CustomTextInput defaultValue={this.props.word} placeholder='Enter the word (e.g. Bonjour)' width={width*0.7} height={35} onChangeText={this.onChangeWord}/>
        <CustomTextInput defaultValue={this.props.translation} placeholder='Enter the translation (e.g. Hello)' width={width*0.7} height={35} onChangeText={this.onChangeTranslation}/>
        {buttonSection}
      </View>
    )
  }
  //when you reviewed and success or failure
  onChangeTranslation = (text) => {
    this.props.changeTranslation(text);
  }
  onChangeWord = (text) => {
    this.props.changeWord(text);
    this.setState({text});
  }
  onDeleteWord = () => {
    Alert.alert(
      'Alert Title',
      'Are you sure you want to delete this word?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: () => console.log('OK Pressed!')},
      ])
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
    borderColor: 'rgb(208,208,208)',
    borderWidth: 1,
  },
  blankImage: {
    backgroundColor: 'rgb(252,252,252)',
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
