var React = require('React');
import {StyleSheet, View, ScrollView, Text, Image, Dimensions} from 'react-native';
import WordForm from '../WordForm';
import Button from '../Button';
import * as commons from '../../data/commons'

var {width, height} = Dimensions.get('window');
export default class EditPageForm extends React.Component {
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
    text: this.props.word ? this.props.word : ''
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
      <ScrollView contentContainerStyle={styles.formContainer}>
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
    )
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
