var React = require('React');
import { connect } from 'react-redux'
import {default as DumbWordsPage} from '../../pages/WordsPage'

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

const WordsPage = connect(
  mapStateToProps,
  {}
)(DumbWordsPage)

export default WordsPage
