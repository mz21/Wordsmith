var React = require('React');
import { connect } from 'react-redux'
import { switchTab, loadTodosRequest } from '../../../data/actions'
import {default as DumbTodoPage} from '../../pages/TodoPage'
import * as tabs from '../../../data/commons'

const getCompletedTodos = (todos) => {
  return todos.filter(todo => todo.completed);
}

const getUncompletedTodos = (todos) => {
  return todos.filter(todo => !todo.completed);
}

const mapStateToProps = (state) => {
  let todos = state.todos.todos;
  let completed = getCompletedTodos(todos);
  let uncompleted = getUncompletedTodos(todos);
  let todosTotal = todos.length;
  let completedTotal = todosTotal - uncompleted.length;
  return {
    uncompletedTodos: uncompleted,
    completedTodos: completed,
    completed: completedTotal,
    total: todosTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(loadTodosRequest())
    },
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
