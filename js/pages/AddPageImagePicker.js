var React = require('React');
import {StyleSheet, ScrollView, View, Text, Dimensions, Image} from 'react-native';
import Button from '../Button'

var {width, height} = Dimensions.get('window');
export default class AddPage extends React.Component {
  render() {
    var images = Array.from(Array(20).keys()).map((key) =>
      <Image key={key} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        style={styles.image} />
    )
    return (
    <View style={styles.container}>
      <View style={styles.images}>
        <ScrollView contentContainerStyle={styles.imagePicker}>
          {images}
        </ScrollView>
      </View>
      <View style={styles.addImageSection}>
        <Button text="Add Image"/>
      </View>
    </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    width: width,
    height: 0.9 * height
  },
  images: {
    height: 0.6 * height,
    borderColor: 'rgb(200,200,200)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingTop: 5,
    paddingBottom: 15
  },
  imagePicker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    margin: 5
  },
  addImageSection: {
    height: 0.15 * height,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
