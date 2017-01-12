var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var ScrollView = require('ScrollView');
var Text = require('Text');
var Image = require('Image');
var ActivityIndicator = require('ActivityIndicator');
var Dimensions = require('Dimensions');
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../Button';
import WordEntry from '../WordEntry';

var {width} = Dimensions.get('window');
class TodoPage extends React.Component {
  props: {
    onTab: React.PropTypes.func,
    isLoading: React.PropTypes.bool
  }
  render() {
    const uncompletedWords = this.props.uncompletedTodos.map((todo) =>
      <WordEntry word={todo.word} key={todo.id} textColor={'rgb(60,60,60)'}/>
    );
    const completedWords = this.props.completedTodos.map((todo) =>
      <WordEntry word={todo.word} key={todo.id} textColor={'rgb(60,179,113)'}/>
    );
    if(this.props.isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          size="small"
          style={{flex: 1}}
        />
      )
    }

    return (
      <View style={styles.todoLayout}>
        <View style={styles.progressSection}>
          <ProgressCircle size={80} showsText formatText={() => this.props.completed + '/' + this.props.total} progress={this.props.completed / this.props.total} color={'rgba(197,111,255, 1)'} thickness={5} unfilledColor={'rgba(197,111,255, 0.35)'} borderWidth={0} textStyle={styles.progressCircleText} indeterminate={false} />
          <Button width={110} height={35} text="Start" onPress={this.props.onTab} />
        </View>
        <ScrollView contentContainerStyle={styles.wordEntries}>
          {uncompletedWords}
          {completedWords}
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  todoLayout: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: width,
    marginBottom: 50
  },
  progressSection: {
    flexDirection: 'row',
    height: 130,
    width: width,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: 'rgb(220,220,220)',
    borderBottomWidth: 1
  },
  progressCircleText: {
    color: 'rgb(111,111,111)',
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1
  },
  wordEntries: {
    alignItems: 'center',
    width: width,
    paddingBottom: 25
  }
});

module.exports = TodoPage;
