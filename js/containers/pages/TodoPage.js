var React = require('React');
import { connect } from 'react-redux'
import { switchTab, loadTodosRequest, setTodosToday } from '../../../data/actions'
import {default as DumbTodoPage} from '../../pages/TodoPage'
import * as tabs from '../../../data/commons'

const mapStateToProps = (state) => {
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const TodoPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbTodoPage)

export default TodoPage
