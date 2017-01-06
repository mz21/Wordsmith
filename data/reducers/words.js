const initialState = [];

const words = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_WORD_LIST':
      return action.words;
    case 'ADD_WORD':
      return [
        ...state,
        action.word
      ]
    case 'ORDER_WORDS':
      switch(action.order) {
        case 'alphabetical':
          var sorted = [...state].sort((a, b) => {return a.word > b.word ? 1 : -1})
          console.log(sorted)
          return sorted
        case 'chronological':
          return [...state].sort((a, b) => {return a.nextReviewTime - b.nextReviewTime})
        case 'accuracy':
          return state;
        default:
          return state;
      }
    default:
      return state;
  }
}

export default words
