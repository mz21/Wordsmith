import { connect } from 'react-redux'
import {orderWords} from '../../data/actions'
import {default as DumbFilterTabs} from '../FilterTabs'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderWords: (order) => {
      dispatch(orderWords(order))
    }
  }
}

const FilterTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbFilterTabs)

export default FilterTabs
