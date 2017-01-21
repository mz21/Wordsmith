var React = require('React');
import {Image, View, StyleSheet, Text} from 'react-native';
var removeDiacritics = require('diacritics').remove;

export default class ImageTile extends React.Component {
  props: {
    url: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    text: React.PropTypes.string,
    style: React.PropTypes.object
  }
  render() {
    let imageComp = null;
    if(!this.props.url && this.props.text && this.props.text.length > 0) {
      let character = this.props.text.charAt(0)
      character = removeDiacritics(character.toUpperCase())
      imageComp = <View style={[{width: this.props.width, height: this.props.height, backgroundColor: 'rgb(220,220,220)', alignItems: 'center', justifyContent: 'center'}]}>
        <Text style={{fontWeight: '800', color: 'rgb(180,137,195)', fontSize: this.props.width * 0.65, fontFamily: 'Avenir Next'}}>{character}</Text>
      </View>
    }
    else {
      imageComp = <Image style={[{width: this.props.width, height: this.props.height}]} source={{uri: this.props.url}} accesibilityLabel={this.props.text} />
    }
    return (
      <View style={[this.props.style ? this.props.style : null, {width: this.props.width, height: this.props.height}]}>
        {imageComp}
      </View>
    )
  }
}

var styles = StyleSheet.create({
});
