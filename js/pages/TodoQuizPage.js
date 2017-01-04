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
  props: {
    word: React.PropTypes.string,
    image: React.PropTypes.string,
    completed: React.PropTypes.number,
    total: React.PropTypes.number,
    id: React.PropTypes.number,
    onPress: React.Proptypes.func
  }
  render() {
    return (
      <View style={styles.container}>
        <ProgressBar completed={this.props.completed} total={this.props.total} length={width*0.7} />
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: width * 0.7, height: width * 0.7}} />
        <Text>
          {this.props.word}
        </Text>
        <View style={styles.buttonSection}>
          <CircularButton size={110} text="Don't Know" onPress={() => this.props.onPress({id: this.props.id, success: false})} />
          <CircularButton size={110} text="Got It!" onPress={() => this.props.onPress({id: this.props.id, success: true})} />
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
