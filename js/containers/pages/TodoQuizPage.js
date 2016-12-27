var React = require('React');
import { connect } from 'react-redux'
import { completeTodo } from '../../../data/actions'
import {default as DumbTodoQuizPage} from '../../pages/TodoQuizPage'
import * as tabs from '../../../data/constants'

const getUncompletedTodos = (todos) => {
  return todos.filter(todo => !todo.completed);
}

const mapStateToProps = (state) => {
  let todos = state.todos.todos
  let uncompleted = getUncompletedTodos(todos);
  let todosTotal = todos.length;
  let completedTotal = todosTotal - uncompleted.length;
  return {
    word: uncompleted[0].text,
    image: uncompleted[0].image,
    id: uncompleted[0].id,
    completed: completedTotal,
    total: todosTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: (id) => {
      dispatch(completeTodo(id))
    }
  }
}

const TodoQuizPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbTodoQuizPage)

export default TodoQuizPage
