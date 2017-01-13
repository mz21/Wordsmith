const initialState = {
  word: '',
  translation: '',
  fullUrl: '',
  thumbnailUrl: '',
  imageUrls: []
};

const add = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_WORD':
      return {
        ...state,
        word: action.word
      }
    case 'CHANGE_TRANSLATION':
      return {
        ...state,
        translation: action.translation
      }
    case 'SET_IMAGE':
      return {
        ...state,
        fullUrl: action.fullUrl,
        thumbnailUrl: action.thumbnailUrl
      }
    case 'FETCH_IMAGES':
      return {
        ...state,
        imageUrls: action.imageUrls
      }
    case 'START_OVER':
      return initialState
    default:
      return state
  }
}

export default add
