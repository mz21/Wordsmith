import * as tabs from '../constants'

const initialState = { tab: tabs.TODO };

const navigation = (state = initialState, action) => {
  if (action.type === 'SWITCH_TAB') {
    return {...state, tab: action.tab};
  }
  return state;
}

export default navigation
