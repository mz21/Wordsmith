var React = require('React');
import { connect } from 'react-redux'
import { getWords } from '../../../data/actions'
import {default as DumbWordsPage} from '../../pages/WordsPage'

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(getWords())
    }
  }
}

const WordsPage = connect(
  () => ({}),
  mapDispatchToProps
)(DumbWordsPage)

export default WordsPage
