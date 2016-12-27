var React = require('React');
import { connect } from 'react-redux'
import { switchTab } from '../../../data/actions'
import {default as DumbTodoPage} from '../../pages/TodoPage'
import * as tabs from '../../../data/constants'

const getUncompletedTodos = (todos) => {
  return todos.filter(todo => !todo.completed);
}

const mapStateToProps = (state) => {
  let todos = state.todos.todos;
  let uncompleted = getUncompletedTodos(todos);
  let todosTotal = todos.length;
  let completedTotal = todosTotal - uncompleted.length;
  return {
    todos,
    completed: completedTotal,
    total: todosTotal
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
