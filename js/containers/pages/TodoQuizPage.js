var React = require('React');
import { connect } from 'react-redux'
import { completeTodoRequest, switchTab } from '../../../data/actions'
import {default as DumbTodoQuizPage} from '../../pages/TodoQuizPage'
import * as tabs from '../../../data/commons'

const getUncompletedTodos = (todos) => {
  return todos.filter(todo => !todo.completed);
}

const mapStateToProps = (state) => {
  let todos = state.todos.todos;
  let uncompleted = getUncompletedTodos(todos);
  let todosTotal = todos.length;
  let completedTotal = todosTotal - uncompleted.length;
  let word = null
  let image = null
  let thumbnail = null
  let id = null
  if(uncompleted.length) {
    id = uncompleted[0].id
    word = uncompleted[0].word
    image = uncompleted[0].image
    thumbnail = uncompleted[0].thumbnailUrl
  }
  return {
    word,
    image,
    thumbnail,
    id,
    completed: completedTotal,
    total: todosTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: (id) => {
      dispatch(completeTodoRequest(id))
    },
    onTab: () => {
      dispatch(switchTab(tabs.TODO))
    }
  }
}

const TodoQuizPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbTodoQuizPage)

export default TodoQuizPage
