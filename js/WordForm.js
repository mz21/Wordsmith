var React = require('React');
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import CustomTextInput from './CustomTextInput';

var {width, height} = Dimensions.get('window');
export default class WordForm extends React.Component {
  props: {
    fullUrl: React.PropTypes.string,
    word: React.PropTypes.string,
    translation: React.PropTypes.string,
    changeWord: React.PropTypes.func,
    changeTranslation: React.PropTypes.func,
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
    return (
      <View style={{height: height * 0.58, justifyContent: 'space-between', alignItems: 'center'}}>
        {imageBlock}
        <CustomTextInput defaultValue={this.props.word} placeholder='Enter the word (e.g. Bonjour)' width={width*0.7} height={35} onChangeText={this.onChangeWord}/>
        <CustomTextInput defaultValue={this.props.translation} placeholder='Enter the translation (e.g. Hello)' width={width*0.7} height={35} onChangeText={this.onChangeTranslation}/>
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
}

var styles = StyleSheet.create({
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
});
