var React = require('React');
import {StyleSheet, View, ScrollView, Keyboard, Text, Image, Dimensions, Alert} from 'react-native';
import WordForm from '../WordForm';
import Button from '../Button';
import * as commons from '../../data/commons'

var {width, height} = Dimensions.get('window');
export default class EditPageForm extends React.Component {
  props: {
    goBack: React.PropTypes.func,
    editWord: React.PropTypes.func,
    deleteWord: React.PropTypes.func,
    changeWord: React.PropTypes.func,
    changeTranslation: React.PropTypes.func,
    word: React.PropTypes.string,
    translation: React.PropTypes.string,
    thumbnailUrl: React.PropTypes.string,
    fullUrl: React.PropTypes.string,
    id: React.PropTypes.string
  }
  state = {
    keyboardOffset: 0
  }
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
      this.setState({keyboardOffset: e.endCoordinates.height - 2});
    })
    this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', (e) => {
      this.setState({keyboardOffset: 0});
    })
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.formContainer} contentOffset={{y: this.state.keyboardOffset}}>
        <WordForm {...this.props}/>
        <View style={styles.buttonSection}>
          <Button text="Save Word" backgroundColor={commons.MED_PURPLE} textColor='rgb(251,251,251)' width={110} height={35} onPress={() =>
              {
                this.props.editWord({
                  word: this.props.word,
                  translation: this.props.translation,
                  thumbnailUrl: this.props.thumbnailUrl,
                  fullUrl: this.props.fullUrl,
                  id: this.props.id
                });
                this.props.goBack();
            }}/>
          <Button text="Delete" backgroundColor={commons.RED} textColor='rgb(251,251,251)' width={110} height={35} onPress={this.onDeleteWord}/>
        </View>
      </ScrollView>
    )
  }
  onDeleteWord = () => {
    Alert.alert(
      'Deleting Word',
      'Are you sure you want to delete this word?',
      [
        {text: 'Cancel', onPress: () => {}},
        {text: 'OK', onPress: () => {
          this.props.deleteWord(this.props.id)
          this.props.goBack();
        }}
      ])
  }
}

var styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 0.7 * width
  },
});
