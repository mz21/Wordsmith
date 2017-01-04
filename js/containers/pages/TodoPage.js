var React = require('React');
import { connect } from 'react-redux'
import { setTodosRequest } from '../../../data/actions'
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
    total: todosTotal,
    isLoading: state.todos.isLoading,
    timeOfLastUpdate: state.todos.timeOfLastUpdate
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setTodos: (updated) => {
      dispatch(setTodosRequest(updated));
    }
  }
}

const TodoPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbTodoPage)

export default TodoPage
