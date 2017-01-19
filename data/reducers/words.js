import * as commons from '../commons';

const initialState = {order: commons.order.ALPHABETICAL, words: []};

const words = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_WORD_LIST':
      return {...state, words: action.words};
    case 'ADD_WORD':
      return {
        ...state,
        words: [...state.words, action.word]
      }
    case 'ORDER_WORDS':
      let order = state.order
      if(action.order) {
        order = action.order
      }
      switch(order) {
        case commons.order.ALPHABETICAL:
          return {...state, words: [...state.words].sort((a, b) => {return a.word.localeCompare(b.word)})}
        case commons.order.CHRONOLOGICAL:
          return {...state, words: [...state.words].sort((a, b) => {return a.nextReviewTime - b.nextReviewTime})}
        case commons.order.ACCURACY:
          return {...state, words: [...state.words].sort((a, b) =>
            { let accuracyA = commons.getReviewsAccuracy(a.reviews);
            let accuracyB = commons.getReviewsAccuracy(b.reviews);
            if(!Number.isInteger(accuracyA)) {
              return 1;
            }
            if(!Number.isInteger(accuracyB)) {
              return -1;
            }
            return accuracyA - accuracyB;
          })}
        default:
          return state;
      }
    case 'SET_ORDER':
      return {
        ...state,
        order: action.order
      }
    case 'EDIT_WORD_REVIEW_TIME':
      return {...state, words: state.words.map(word => {
        if(word.id === action.id) {
          word.nextReviewTime = commons.daysUntil(action.nextReviewTime);
        }
        return word;
      })}
    case 'UPDATE_WORD_REVIEWS':
      return {...state, words: state.words.map(word => {
        if(word.id === action.id) {
          word.reviews = action.reviews
        }
        return word
      })}
    case 'EDIT_WORD':
      return {...state, words: state.words.map(word => {
        if(word.id === action.id) {
          word.word = action.word
          word.translation = action.translation
          word.fullUrl = action.fullUrl
          word.thumbnailUrl = action.thumbnailUrl
        }
        return word;
      })}
    case 'DELETE_WORD':
      return {...state, words: state.words.filter((word) => {
        return word.id != action.id
      })}
    default:
      return state;
  }
}

export default words
