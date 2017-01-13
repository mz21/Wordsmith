var React = require('React');
import { connect } from 'react-redux'
import { changeWord, changeTranslation } from '../../../data/actions/add';
import {default as DumbAddPageForm} from '../../pages/AddPageForm'

const mapStateToProps = (state) => {
  return {
    word: state.add.word,
    translation: state.add.translation,
    thumbnailUrl: state.add.thumbnailUrl,
    fullUrl: state.add.fullUrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeWord: (word) => {
      dispatch(changeWord(word))
    },
    changeTranslation: (translation) => {
      dispatch(changeTranslation(translation))
    }
  }
}

const AddPageForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbAddPageForm)

export default AddPageForm
