var React = require('React');
import { connect } from 'react-redux'
import { switchTab } from '../../../data/actions'
import {default as DumbTodoPage} from '../../pages/TodoPage'
import * as tabs from '../../../data/constants'

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTab: () => {
      dispatch(switchTab(tabs.TODOQUIZ))
    }
  }
}

const TodoPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbTodoPage)

export default TodoPage
