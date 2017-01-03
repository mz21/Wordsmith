import { connect } from 'react-redux'
import { toggleTodo } from '../../data/actions'
import {default as DumbHeaderBar} from '../HeaderBar'
import * as tabs from '../../data/commons'

const getTitle = (tab) => {
  switch (tab) {
    case tabs.TODO:
      return "Today's Todos"
    case tabs.ADD:
      return "Add a Word"
    case tabs.WORDS:
      return "List of Words"
    case tabs.CALENDAR:
      return "Calendar"
    case tabs.PROFILE:
      return "Profile"
    default:
      return "Today's Todos"
  }
}

const mapStateToProps = (state) => {
  return {
    title: getTitle(state.navigation.tab)
  }
}

const HeaderBar = connect(
  mapStateToProps,
  {}
)(DumbHeaderBar)

export default HeaderBar
