var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var ScrollView = require('ScrollView');
var Text = require('Text')
var Image = require('Image');
var Dimensions = require('Dimensions');
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../Button';
import WordEntry from '../WordEntry';
import HeaderBar from '../HeaderBar';

var {width} = Dimensions.get('window');
class TodoPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View style={styles.todoLayout}>
        <HeaderBar title="Todos for Today" width={width}/>
        <View style={styles.progressSection}>
          <ProgressCircle size={80} showsText formatText={function() {return '0/18';}} progress={0.2} color={'rgba(197,111,255, 1)'} thickness={5} unfilledColor={'rgba(197,111,255, 0.35)'} borderWidth={0} textStyle={styles.progressCircleText} indeterminate={false} />
          <Button width={110} height={35} text="Start"/>
        </View>
        <ScrollView contentContainerStyle={styles.wordEntries}>
          <WordEntry word="homen" />
          <WordEntry word="mulheres" />
          <WordEntry word="obrigado" />
          <WordEntry word="fogo" />
          <WordEntry word="vermelho" />
          <WordEntry word="tudo bom" />
          <WordEntry word="homen" />
          <WordEntry word="mulheres" />
          <WordEntry word="obrigado" />
          <WordEntry word="fogo" />
          <WordEntry word="vermelho" />
          <WordEntry word="tudo bom" />
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
    width: width
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
