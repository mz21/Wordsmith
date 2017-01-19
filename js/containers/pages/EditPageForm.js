var React = require('React');
import { connect } from 'react-redux'
import { changeWord, changeTranslation, editWordRequest, deleteWordRequest } from '../../../data/actions/';
import {default as DumbEditPageForm} from '../../pages/EditPageForm'

const mapStateToProps = (state) => {
  return {
    word: state.add.editWord,
    translation: state.add.editTranslation,
    fullUrl: state.add.editFullUrl,
    thumbnailUrl: state.add.editThumbnailUrl,
    id: state.add.editId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeWord: (word) => {
      dispatch(changeWord(word, true))
    },
    changeTranslation: (translation) => {
      dispatch(changeTranslation(translation, true))
    },
    editWord: (data) => {
      dispatch(editWordRequest(data))
    },
    deleteWord: (id) => {
      dispatch(deleteWordRequest(id))
    }
  }
}

const EditPageForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbEditPageForm)

export default EditPageForm
