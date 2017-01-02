var React = require('React');
import { connect } from 'react-redux'
import { addWordRequest } from '../../../data/actions'
import {default as DumbAddPage} from '../../pages/AddPage'

const mapDispatchToProps = (dispatch) => {
  return {
    addWord: (data) => {
      dispatch(addWordRequest(data))
    }
  }
}

const AddPage = connect(
  () => ({}),
  mapDispatchToProps
)(DumbAddPage)

export default AddPage
