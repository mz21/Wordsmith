var React = require('React');
import { connect } from 'react-redux'
import { setTodosRequest } from '../../../data/actions'
import {default as DumbTodoPage} from '../../pages/TodoPage'
import * as tabs from '../../../data/commons'

const mapStateToProps = (state) => {
  return {
    
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
