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
import AddPage from '../containers/pages/AddPage'
import commons from '../../data/commons'

var {width, height} = Dimensions.get('window');
class TodoPage extends React.Component {
  props: {
    onTab: React.PropTypes.func,
    editWord: React.PropTypes.func,
    isLoading: React.PropTypes.bool,
    words: React.PropTypes.array,
    uncompletedTodos: React.PropTypes.array,
    completedTodos: React.PropTypes.array,
    completed: React.PropTypes.number,
    total: React.PropTypes.number,
  }
  state = {
    isEditing: false
  }
  render() {
    const uncompletedWords = this.props.uncompletedTodos.map((todo) =>
      <WordEntry word={todo.word} thumbnail={todo.thumbnailUrl} key={todo.id} id={todo.id} textColor={'rgb(60,60,60)'} onPress={this.onPress}/>
    );
    const completedWords = this.props.completedTodos.map((todo) =>
      <WordEntry word={todo.word} thumbnail={todo.thumbnailUrl} key={todo.id} id={todo.id} textColor={'rgb(60,179,113)'} onPress={this.onPress}/>
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

    if(this.state.isEditing) {
      return (
        <AddPage editMode={true} goBack={() => {this.setState({isEditing: false})}}/>
      )
    }
    if(!this.props.total) {
      return (
        <View style={styles.noTodosLayout}>
          <View style={{height: 130, width: width * 0.7, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontFamily: 'Avenir Next', fontWeight: '600', fontSize: 24, color: commons.PURPLE}}>No Words Today</Text>
          <Text style={{fontFamily: 'Avenir Next', textAlign: 'center'}}>Consider adding a few words to do tomorrow.</Text>
          <Button width={110} height={35} text="Add Word" backgroundColor={commons.PURPLE} textColor={commons.ALMOST_WHITE} onPress={this.props.addWordTab} />
          </View>
        </View>
      )
    }
    else {
      let buttonSection = null
      if(this.props.completed == this.props.total) {
        buttonSection = (
          <Text style={{fontFamily: 'Avenir Next', color: 'rgb(65,65,65)'}}>All Complete!</Text>
        )
      }
      else {
        buttonSection = (
          <Button width={110} height={35} text="Start" onPress={this.props.onTab} />
        )
      }
      return (
        <View style={styles.todoLayout}>
          <View style={styles.progressSection}>
            <ProgressCircle size={80} showsText formatText={() => this.props.completed + '/' + this.props.total} progress={this.props.total ? this.props.completed / this.props.total : 0} color={'rgba(197,111,255, 1)'} thickness={5} unfilledColor={'rgba(197,111,255, 0.35)'} borderWidth={0} textStyle={styles.progressCircleText} indeterminate={false} />
            {buttonSection}
          </View>
          <ScrollView contentContainerStyle={styles.wordEntries}>
            {uncompletedWords}
            {completedWords}
          </ScrollView>
        </View>
      );
    }
  }
  onPress = (id) => {
    this.props.editWord(this.props.words, id)
    this.setState({isEditing: true})
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
  noTodosLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 0.85 * height
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
