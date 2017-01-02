const initialState = [];

const words = (state = initialState, action) => {
  if (action.type === 'LOAD_WORDS') {
    return {...state, tab: action.tab};
  }
  return state;
}

export default words
