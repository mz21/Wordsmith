const initialState = {
  word: '',
  translation: '',
  fullUrl: '',
  thumbnailUrl: '',
  imageUrls: [],
  editWord: '',
  editTranslation: '',
  editFullUrl: '',
  editThumbnailUrl: '',
  editImageUrls: [],
  editId: ''
};

const add = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_WORD':
      if(action.edit) {
        return {
          ...state,
          editWord: action.word
        }
      }
      return {
        ...state,
        word: action.word
      }
    case 'CHANGE_TRANSLATION':
      if(action.edit) {
        return {
          ...state,
          editTranslation: action.translation
        }
      }
      return {
        ...state,
        translation: action.translation
      }
    case 'SET_IMAGE':
      if(action.edit) {
        return {
          ...state,
          editFullUrl: action.fullUrl,
          editThumbnail: action.thumbnailUrl
        }
      }
      return {
        ...state,
        fullUrl: action.fullUrl,
        thumbnailUrl: action.thumbnailUrl
      }
    case 'FETCH_IMAGES':
      if(action.edit) {
        return {
          ...state,
          editImageUrls: action.imageUrls
        }
      }
      return {
        ...state,
        imageUrls: action.imageUrls
      }
    case 'SET_EDIT_WORD':
      return {
        ...state,
        editWord: action.word,
        editTranslation: action.translation,
        editFullUrl: action.fullUrl,
        editThumbnailUrl: action.thumbnailUrl,
        editId: action.id
      }
    case 'START_OVER':
      return initialState
    default:
      return state
  }
}

export default add
