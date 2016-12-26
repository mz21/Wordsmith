var React = require('React');
import { connect } from 'react-redux'
import { switchTab } from '../../../data/actions'
import {default as DumbTodoPage} from '../../pages/TodoPage'
import * as tabs from '../../../data/constants'

const mapStateToProps = (state) => {
  return {
    tab: state.navigation.tab
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
  state => {
    return {}
  },
  mapDispatchToProps
)(DumbTodoPage)

export default TodoPage
