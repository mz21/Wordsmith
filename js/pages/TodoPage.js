var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text')
var Image = require('Image');
import ProgressCircle from 'react-native-progress/Circle';

class TodoPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View style={    {flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center'}}>
        <View style={styles.headerBar}>
            <Text style={
              {
                height: 28,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 14,
                fontWeight: '600'
              }
            }>
              Todos for Today
            </Text>
        </View>
        <Text>
          Todo Page
        </Text>
        <ProgressCircle size={60} showsText formatText={function() {return '6/152';}} progress={0.8} indeterminate={false} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    height: 60,
    width: 500,
    backgroundColor: 'rgb(249,249,249)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(210,210,210, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});

module.exports = TodoPage;
