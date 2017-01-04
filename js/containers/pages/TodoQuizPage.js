var React = require('React');
import { connect } from 'react-redux'
// import { } from '../../../data/actions'
import {default as DumbTodoQuizPage} from '../../pages/TodoQuizPage'

const mapStateToProps = (state) => {
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const TodoQuizPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbTodoQuizPage)

export default TodoQuizPage
