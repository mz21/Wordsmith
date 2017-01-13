var React = require('React');
import { connect } from 'react-redux'
import { setImage } from '../../../data/actions'
import {default as DumbAddPageImagePicker} from '../../pages/AddPageImagePicker'

const mapStateToProps = (state) => {
  return {
    imageUrls: state.add.imageUrls,
    imageUrl: state.add.imageUrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setImage: (imageUrl) => {
      dispatch(setImage(imageUrl));
    }
  }
}

const AddPageImagePicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbAddPageImagePicker)

export default AddPageImagePicker
