var React = require('React');
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native'
import ProgressCircle from 'react-native-progress/Circle';
import CircularButton from '../CircularButton'
import ProgressBar from '../ProgressBar'
import Button from '../Button'
import ImageTile from '../ImageTile'
import * as commons from '../../data/commons'

var {width, height} = Dimensions.get('window');
export default class TodoQuizPage extends React.Component {
  props: {
    word: React.PropTypes.string,
    image: React.PropTypes.string,
    thumbnail: React.PropTypes.string,
    completed: React.PropTypes.number,
    total: React.PropTypes.number,
    id: React.PropTypes.number,
    onPress: React.Proptypes.func,
    onTab: React.Proptypes.func,
  }
  render() {
    if(!this.props.completed || !this.props.total || this.props.completed == this.props.total) {
      return (
        <View style={styles.completeContainer}>
          <Text style={styles.allComplete}>All Complete!</Text>
          <ProgressCircle size={width * 0.4} showsText formatText={() => this.props.completed + '/' + this.props.total} progress={1} color={'rgba(197,111,255, 1)'} thickness={width * 0.04} unfilledColor={'rgba(197,111,255, 0.35)'} borderWidth={0} textStyle={styles.progressCircleText} indeterminate={false} />
          <Text style={{fontFamily: 'Avenir Next'}}>See you back soon!</Text>
          <Button width={110} height={35} text="Continue" backgroundColor={commons.PURPLE} textColor={commons.ALMOST_WHITE} onPress={this.props.onTab} />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ProgressBar completed={this.props.completed} total={this.props.total} length={width*0.7} />
        <ImageTile url={this.props.thumbnail} width={width * 0.7} height={width * 0.7} text={this.props.word} />
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
  },
  completeContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: height * 0.78
  },
  allComplete: {
    fontFamily: 'Avenir Next',
    fontWeight: '600',
    fontSize: 18
  },
  progressCircleText: {
    color: 'rgb(61,61,61)',
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 1
  }
});
