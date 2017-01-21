var React = require('React');
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import ImageTile from './ImageTile'

var {width} = Dimensions.get('window');
class WordEntry extends React.Component {
  props: {
    word: React.PropTypes.string,
    image: React.PropTypes.string,
    textColor: React.PropTypes.string,
    onPress: React.PropTypes.func,
    id: React.PropTypes.string,
    thumbnail: React.PropTypes.string
  };
  render() {
    return (
      <TouchableOpacity onPress={() => {this.props.onPress(this.props.id)}} style={styles.wordEntry}>
        <Text style={[styles.text, {color: this.props.textColor}]}>
          {this.props.word}
        </Text>
        <ImageTile width={30} height={30} text={this.props.word} url={this.props.thumbnail} />
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  wordEntry: {
    borderBottomColor: 'rgb(220,220,220)',
    borderBottomWidth: 1,
    marginTop: 7,
    height: 47,
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    marginLeft: 5
  }
});

module.exports = WordEntry;
