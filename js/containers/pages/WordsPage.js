var React = require('React');
import { connect } from 'react-redux'
import { loadWordsRequest } from '../../../data/actions'
import {default as DumbWordsPage} from '../../pages/WordsPage'

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(loadWordsRequest())
    }
  }
}

const WordsPage = connect(
  () => ({}),
  mapDispatchToProps
)(DumbWordsPage)

export default WordsPage
