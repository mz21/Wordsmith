var React = require('React');
import { connect } from 'react-redux'
import { addWordRequest, fetchImagesRequest } from '../../../data/actions'
import {default as DumbAddPage} from '../../pages/AddPage'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: (text) => {
      dispatch(fetchImagesRequest(text))
    }
  }
}

const AddPage = connect(
  () => ({}),
  mapDispatchToProps
)(DumbAddPage)

export default AddPage
