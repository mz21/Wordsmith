import { connect } from 'react-redux'
import {orderWords, setOrder} from '../../data/actions'
import {default as DumbFilterTabs} from '../FilterTabs'

const mapStateToProps = (state) => {
  return {
    order: state.words.order
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderWords: (order) => {
      dispatch(setOrder(order))
      dispatch(orderWords(order))
    }
  }
}

const FilterTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbFilterTabs)

export default FilterTabs
