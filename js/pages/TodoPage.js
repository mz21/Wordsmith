var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');
var Dimensions = require('Dimensions');
import ProgressCircle from 'react-native-progress/Circle';
import Button from '../Button'

var {width} = Dimensions.get('window');
class TodoPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View style={styles.todoLayout}>
        <View style={styles.headerBar}>
            <Text style={
              {
                height: 28,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 14,
                fontWeight: '600',
                fontFamily: 'Helvetica'
              }
            }>
              Todos for Today
            </Text>
        </View>
        <View style={styles.progressSection}>
          <ProgressCircle size={80} showsText formatText={function() {return '0/18';}} progress={0.8} color={'rgb(197,111,255)'} indeterminate={false} />
          <Button />
        </View>
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
  headerBar: {
    flexDirection: 'row',
    height: 60,
    width: width,
    backgroundColor: 'rgb(249,249,249)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(210,210,210, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  progressSection: {
    flexDirection: 'row',
    height: 130,
    width: width,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: 'rgb(220,220,220)',
    borderBottomWidth: 1
  }
});

module.exports = TodoPage;
