const initialState = {
  word: null,
  translation: null,
  fullUrl: null,
  thumbnailUrl: null,
  imageUrls: null
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
    default:
      return state
  }
}

export default add
