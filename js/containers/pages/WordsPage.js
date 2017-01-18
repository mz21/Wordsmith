var React = require('React');
import { connect } from 'react-redux'
import {default as DumbWordsPage} from '../../pages/WordsPage'
import {setEditWord} from '../../../data/actions'

const mapStateToProps = (state) => {
  return {
    words: state.words.words
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editWord: (words, id) => {
      dispatch(setEditWord(words, id))
    }
  }
}

const WordsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbWordsPage)

export default WordsPage
