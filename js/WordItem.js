var React = require('React');
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import ImageTile from './ImageTile'
import * as commons from '../data/commons'

var {width} = Dimensions.get('window');
class WordItem extends React.Component {
  props: {
    word: React.PropTypes.string,
    nextReviewTime: React.PropTypes.number,
    daysUntil: React.PropTypes.number,
    reviews: React.PropTypes.array,
    onPress: React.PropTypes.func,
    id: React.PropTypes.string,
    thumbnail: React.PropTypes.string,
  }
  render() {
    var daysUntil = commons.setDaysUntilText(this.props.daysUntil)
    var accuracy = commons.getReviewsAccuracyString(this.props.reviews);
    return (
      <TouchableOpacity style={styles.container} onPress={() => {
        this.props.onPress(this.props.id)
      }}>
        <ImageTile width={42} height={42} text={this.props.word} url={this.props.thumbnail} />
        <View style={styles.label}>
          <Text style={styles.textWord}>
            {this.props.word}
          </Text>
          <Text style={styles.textCaption}>
            {accuracy} |  Next Attempt: {daysUntil}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    borderBottomColor: 'rgb(200,200,200)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 20,
    paddingBottom: 10,
    width: 0.8 * width
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.6
  },
  textWord: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '600'
  },
  textCaption: {
    fontFamily: 'Avenir Next',
    fontSize: 12,
    fontWeight: '300'
  },
  image: {
    width: 42,
    height: 42
  }
});

module.exports = WordItem;
