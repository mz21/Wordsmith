var strictUriEncode = require('strict-uri-encode');
import {BING_IMAGE_API_KEY} from '../bingSetup'

var changeWord = (word, editMode = false) => {
  return {
    type: 'CHANGE_WORD',
    word,
    edit: editMode
  }
}

var changeTranslation = (translation, editMode = false) => {
  return {
    type: 'CHANGE_TRANSLATION',
    translation,
    edit: editMode
  }
}

var setImage = (imageUrl, editMode = false) => {
  let {thumbnail, full} = imageUrl;
  return {
    type: 'SET_IMAGE',
    thumbnailUrl: thumbnail,
    fullUrl: full,
    edit: editMode
  }
}

var fetchImages = (imageUrls, editMode) => {
  return {
    type: 'FETCH_IMAGES',
    imageUrls,
    edit: editMode
  }
}

var fetchImagesRequest = (search, editMode = false) => {
  return (dispatch) => {
    if(false) {
      if(search) {
        let encodedQueryString = strictUriEncode(search)
        fetch('https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=' + encodedQueryString + '&safeSearch=Off&aspect=Square', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': BING_IMAGE_API_KEY
        }}).then((res) => {
          return res.json()
        })
        .then((res) => {
          console.log(res)
          let imageUrls = res.value.map((value) => {
            return {
              thumbnail: value.thumbnailUrl,
              full: value.thumbnailUrl,
              imageFormat: value.encodingFormat
            }
          })
          dispatch(fetchImages(imageUrls, editMode))
        })
      }
      else {
        let imageUrls = []
        dispatch(fetchImages(imageUrls, editMode))
      }
    }
    else {
      let mockData = ['https://tse4.mm.bing.net/th?id=OIP._bRNlE7X-2QPAp-3kVD2oQEqEs&pid=Api', 'https://tse3.mm.bing.net/th?id=OIP.M3ba9c438e1dd967fe2d4c4b763520604o0&pid=Api', 'https://tse1.mm.bing.net/th?id=OIP.M0aaafe4715d0178894e5be8c9fd27055o0&pid=Api', 'https://tse2.mm.bing.net/th?id=OIP.SItUOwf8pTmy4_7a0sk7IAEsEs&pid=Api', 'https://tse1.mm.bing.net/th?id=OIP.Mbc574f9aeb378e1a15656b9619e17f7bH0&pid=Api', 'https://tse3.mm.bing.net/th?id=OIP.M96407632268d72cea9eb63328da03b41o0&pid=Api', 'https://tse1.mm.bing.net/th?id=OIP.M744986dc2da4ff5f016e0d8c6073609eo0&pid=Api', 'https://tse1.mm.bing.net/th?id=OIP.M484e92d17437bc67881532888fb1e337o0&pid=Api', 'https://tse4.mm.bing.net/th?id=OIP.M40e0aebc5e11c11c4a6cf68b07bfe45cH0&pid=Api', 'https://tse1.mm.bing.net/th?id=OIP.M5b3196486919f872816acaf23ebbac69H0&pid=Api', 'https://tse1.mm.bing.net/th?id=OIP.Mfcd67e371ffe7b20c2e3a5d1663dc583o0&pid=Api', 'https://tse2.mm.bing.net/th?id=OIP.Mdadab5b44ca5354aae365b188ff8e98fH0&pid=Api', 'https://tse3.mm.bing.net/th?id=OIP.M5cba0d1d86e6ef24e476e5d232cbff90H0&pid=Api', 'https://tse4.mm.bing.net/th?id=OIP.M031b4a374aba3340a75a99e88c381259o0&pid=Api', 'https://tse1.mm.bing.net/th?id=OIP.M1c1f7ea0ee4e3cb9ae797418fc1cd9daH0&pid=Api'];
      let imageUrls = mockData.map((url) => {
        return {
          thumbnail: url,
          full: url
        }
      })
      dispatch(fetchImages(imageUrls, editMode))
    }
  }
}

var startOver = () => {
  return {
    type: 'START_OVER'
  }
}

var setEditWord = (words, id) => {
  for(let i = 0; i < words.length; i++) {
    let wordInList = words[i]
    if(wordInList.id === id) {
      let {word, translation, thumbnailUrl, fullUrl, id} = wordInList
      return {
        type: 'SET_EDIT_WORD',
        word,
        translation,
        thumbnailUrl,
        fullUrl,
        id
      }
    }
  }
  console.warn('edit id not found??')
  return {
    type: 'SET_EDIT_WORD',
    word: '',
    translation: '',
    thumbnailUrl: '',
    fullUrl: '',
    id: ''
  }
}

module.exports = {
  changeWord,
  changeTranslation,
  setImage,
  fetchImages,
  fetchImagesRequest,
  startOver,
  setEditWord
}
