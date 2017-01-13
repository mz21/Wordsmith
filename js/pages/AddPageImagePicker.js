var React = require('React');
import {StyleSheet, ScrollView, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import Button from '../Button'

var {width, height} = Dimensions.get('window');
export default class AddPage extends React.Component {
  props: {
    imageUrls: React.PropTypes.array, // of form [{thumbnail: url, full: url}, ..]
    setImage: React.PropTypes.func
  }
  state = {
    selectedThumbnail: null,
    selectedFull: null
  }
  render() {
    let imageUrls = [];
    if(this.props.imageUrls) {
      imageUrls = this.props.imageUrls;
    }
    var images = imageUrls.map((urls) => {
      let {thumbnail, full} = urls
      return (
        <TouchableOpacity activeOpacity={1} style={[styles.imageSection, {margin: 5}]} key={thumbnail} onPress={
          () => {this.setState({selectedThumbnail: thumbnail, selectedFull: full}); }
        }>
        <Image source={{uri: thumbnail}}
          style={[styles.imageSection, styles.image, thumbnail === this.state.selectedThumbnail ? styles.selectedImage : null]} />
      </TouchableOpacity>
      )
    })
    return (
    <View style={styles.container}>
      <View style={styles.images}>
        <ScrollView contentContainerStyle={styles.imagePicker}>
          {images}
        </ScrollView>
      </View>
      <View style={styles.addImageSection}>
        <Button onPress={this.onPress} text="Add Image"/>
      </View>
    </View>
    )
  }
  onPress = () => {
    console.log('hijk')
    console.log(this.state.selectedFull);
    console.log(this.state.selectedThumbnail);
    this.props.setImage({full: this.state.selectedFull, thumbnail: this.state.selectedThumbnail})
  }
}

var styles = StyleSheet.create({
  container: {
    width: width,
    height: 0.9 * height
  },
  images: {
    height: 0.63 * height,
    borderColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: 'rgb(253,253,253)'
  },
  imagePicker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 10
  },
  imageSection: {
    width: width * 0.19,
    height: width * 0.19
  },
  image: {
    borderWidth: 1,
    borderColor: 'rgb(222,222,222)',
  },
  addImageSection: {
    height: 0.12 * height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedImage: {
    backgroundColor: 'black',
    borderColor: 'purple',
    borderWidth: 1,
    opacity: 0.65
  }
});
