var React = require('React');
import { connect } from 'react-redux'
import TodoPage from '../containers/pages/TodoPage'
import TodoQuizPage from '../pages/TodoQuizPage'
import * as tabs from '../../data/constants'

class TodoNav extends React.Component {
  render() {
    let comp = null;
    if(this.props.tab === tabs.TODOQUIZ) {
      comp = <TodoQuizPage />
    }
    else {
      comp = <TodoPage />
    }
    return (
      comp
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.navigation.tab
  }
}

const SmartTodoNav = connect(
  mapStateToProps,
  {}
)(TodoNav)

export default SmartTodoNav
