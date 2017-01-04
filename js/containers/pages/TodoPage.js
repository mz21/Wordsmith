var React = require('React');
import { connect } from 'react-redux'
import { setTodosRequest, switchTab, setUpdatedTime } from '../../../data/actions'
import {default as DumbTodoPage} from '../../pages/TodoPage'
import * as tabs from '../../../data/commons'
import {database} from '../../../data/firebaseSetup';

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
    onTab: () => {
      dispatch(switchTab(tabs.TODOQUIZ))
    },
    setTodos: (updated) => {
      dispatch(setTodosRequest(updated));
    },
    setUpdatedTime: () => {
      return database.ref('/users/' + 'test/lastUpdatedTime/').once('value').then((snapshot) => {
        var updatedTime = snapshot.val().time;
        dispatch(setUpdatedTime(updatedTime));
      });
    }
  }
}

const TodoPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbTodoPage)

export default TodoPage
