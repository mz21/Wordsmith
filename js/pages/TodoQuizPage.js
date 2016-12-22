var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');
var Dimensions = require('Dimensions');
import CircularButton from '../CircularButton'
import ProgressBar from '../ProgressBar'

var {width, height} = Dimensions.get('window');
export default class TodoQuizPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBar completed={6} total={18} length={width*0.7} />
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: width * 0.7, height: width * 0.7}} />
        <Text>
          Profile Page
        </Text>
        <View style={styles.buttonSection}>
          <CircularButton size={110} text="Don't Know" />
          <CircularButton size={110} text="Got It!" />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: height * 0.78
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.7
  }
});
