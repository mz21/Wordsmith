var React = require('React');
import { connect } from 'react-redux'
import { changeWord, changeTranslation, startOver, addWordRequest} from '../../../data/actions/';
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
    addWord: (data) => {
      dispatch(addWordRequest(data))
    },
    changeWord: (word) => {
      dispatch(changeWord(word))
    },
    changeTranslation: (translation) => {
      dispatch(changeTranslation(translation))
    },
    startOver: () => {
      dispatch(startOver())
    }
  }
}

const AddPageForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbAddPageForm)

export default AddPageForm
