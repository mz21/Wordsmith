var React = require('React');
import {StyleSheet, View, ScrollView, Text, Image, Dimensions, Keyboard} from 'react-native';
import WordForm from '../WordForm';
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
    changeWord: React.PropTypes.func,
    changeTranslation: React.PropTypes.func,
    startOver: React.PropTypes.func,
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
    let buttonDisabled = null;
    if(this.props.word.length > 0) {
      buttonDisabled = false
    }
    else {
      buttonDisabled = true
    }
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps={true} contentContainerStyle={styles.formContainer} contentOffset={{y: this.state.keyboardOffset}}>
          <WordForm {...this.props}/>
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
            <Button text="Start Over" width={110} height={35} onPress={this.props.startOver}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    height: height * 0.73,
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
