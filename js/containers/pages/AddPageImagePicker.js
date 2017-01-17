var React = require('React');
import { connect } from 'react-redux'
import { setImage } from '../../../data/actions'
import {default as DumbAddPageImagePicker} from '../../pages/AddPageImagePicker'

const mapStateToProps = (state) => {
  return {
    imageUrls: state.add.imageUrls,
    editImageUrls: state.add.editImageUrls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setImage: (imageUrl, editMode) => {
      dispatch(setImage(imageUrl, editMode));
    }
  }
}

const AddPageImagePicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbAddPageImagePicker)

export default AddPageImagePicker
