import { connect } from 'react-redux'
import { switchTab } from '../../data/actions'
import {NavTabBars as DumbNavTabBars} from '../NavTabBars'

const mapStateToProps = (state) => {
  return {
    tab: state.tab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTab: (tab) => {
      dispatch(switchTab(tab))
    }
  }
}

const NavTabBars = connect(
  {},
  mapDispatchToProps
)(DumbNavTabBars)

export default NavTabBars
