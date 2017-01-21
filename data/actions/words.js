import {database, storage} from '../firebaseSetup';
import * as commons from '../commons';

var setWordList = (words) => ({
  type: 'SET_WORD_LIST',
  words
});

var orderWords = (order) => ({
  type: 'ORDER_WORDS',
  order
})

var setOrder = (order) => ({
  type: 'SET_ORDER',
  order
})

var addWord = (word) => ({
  type: 'ADD_WORD',
  word
});

var editWordReviewTime = (data) => ({
  type: 'EDIT_WORD_REVIEW_TIME',
  nextReviewTime: data.nextReviewTime,
  id: data.id
})

var editWord = (data) => {
  let {id, word, translation, thumbnailUrl, fullUrl} = data
  return {
    type: 'EDIT_WORD',
    id,
    word,
    translation,
    thumbnailUrl,
    fullUrl
  }
}

var deleteWord = (id) => ({
  type: 'DELETE_WORD',
  id
})

var updateWordReviews = (id, reviews) => ({
  type: 'UPDATE_WORD_REVIEWS',
  id,
  reviews
})

var deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

var editTodo = (data) => {
  let {id, word, translation, thumbnailUrl, fullUrl} = data;
  return {
    type: 'EDIT_TODO',
    id,
    word,
    translation,
    thumbnailUrl,
    fullUrl
  }
}

var addWordRequest = (data) => {
  var {thumbnailUrl, fullUrl, translation, word} = data;
  var createTime = Date.now();
  var nextReviewTime = new Date(createTime);
  nextReviewTime.setDate(nextReviewTime.getDate() + 1);
  nextReviewTime = commons.convertToMidnight(nextReviewTime);
  return (dispatch) => {
    let uid = commons.getAuth()
    var wordRef = database.ref('/users/' + uid + '/words').push();
    var id = wordRef.key
    var values = {
      thumbnailUrl,
      fullUrl,
      translation,
      word,
      nextReviewTime,
      createTime
    };

    if(thumbnailUrl && fullUrl) {
      commons.storeImageRequest({url: thumbnailUrl, urlType: 'thumb', imageType: null, userId: uid, imageId: id}).then((thumbUrl) => {
        values.thumbnailUrl = thumbUrl
        commons.storeImageRequest({url: fullUrl, urlType: 'full', imageType: null, userId: uid, imageId: id}).then((fUrl) => {
          values.fullUrl = fUrl
          wordRef.set(values)
          dispatch(addWord({...values, id, nextReviewTime: commons.daysUntil(nextReviewTime), reviews: []}));
          dispatch(orderWords(null));
        })
      })
    }
    else {
      wordRef.set(values);
      dispatch(addWord({...values, id, nextReviewTime: commons.daysUntil(nextReviewTime), reviews: []}));
      dispatch(orderWords(null));
    }
  }
}

var editTodoRequest = (data) => {
  let {id, word, translation, thumbnailUrl, fullUrl} = data
  return (dispatch) => {
    if(id && id != '') {
      if(!translation) {
        translation = ''
      }
      if(!fullUrl) {
        fullUrl = ''
      }
      if(!thumbnailUrl) {
        thumbnailUrl = ''
      }
      let updatePath = '/users/' + commons.getAuth() + '/todos/' + id + '/'
      let updates = {}
      updates[updatePath + 'word'] = word
      updates[updatePath + 'translation'] = translation
      updates[updatePath + 'thumbnailUrl'] = thumbnailUrl
      updates[updatePath + 'fullUrl'] = fullUrl
      database.ref(updatePath).once('value').then((snapshot) => {
        if(snapshot.val()) {
          database.ref().update(updates)
          dispatch(editTodo(data))
        }
      })
    }
    else {
      console.log('invalid id ' + id)
    }
  }
}

var editWordRequest = (data) => {
  return (dispatch) => {
    dispatch(editTodoRequest(data))
    let {id, word, translation, thumbnailUrl, fullUrl} = data
    if(!translation) {
      translation = ''
    }
    if(!fullUrl) {
      fullUrl = ''
    }
    if(!thumbnailUrl) {
      thumbnailUrl = ''
    }
    if(id && id != '') {
      let uid = commons.getAuth()

      let updatePath = '/users/' + uid + '/words/' + id + '/'
      let updates = {}
      updates[updatePath + 'word'] = word
      updates[updatePath + 'translation'] = translation
      updates[updatePath + 'thumbnailUrl'] = thumbnailUrl
      updates[updatePath + 'fullUrl'] = fullUrl

      if(thumbnailUrl && fullUrl) {
        commons.storeImageRequest({url: thumbnailUrl, urlType: 'thumb', imageType: null, userId: uid, imageId: id}).then((thumbUrl) => {
          updates[updatePath + 'thumbnailUrl'] = thumbUrl
          commons.storeImageRequest({url: fullUrl, urlType: 'full', imageType: null, userId: uid, imageId: id}).then((fUrl) => {
            updates[updatePath + 'fullUrl'] = fUrl
            data.thumbnailUrl = thumbUrl
            data.fullUrl = fullUrl
            database.ref().update(updates)
            dispatch(editWord(data));
            dispatch(orderWords(null));
          })
        })
      }
      else {
        database.ref().update(updates)
        dispatch(editWord(data));
        dispatch(orderWords(null));
      }
    }
  }
}

var deleteTodoRequest = (id) => {
  return (dispatch) => {
    if(id && id != '') {
      database.ref('/users/' + commons.getAuth() + '/todos/' + id).remove();
    }
    else {
      console.log('invalid id ' + id)
    }
    dispatch(deleteTodo(id));
  }
}

var deleteWordRequest = (id) => {
  return (dispatch) => {
    dispatch(deleteTodoRequest(id))
    if(id && id != '') {
      database.ref('/users/' + commons.getAuth() + '/words/' + id).remove();
      let thumbRef = storage.ref().child('/user/' + commons.getAuth() + '/' + id + '-thumb' + '.jpg')
      thumbRef.delete().then(() => {
        storage.ref().child('/user/' + commons.getAuth() + '/' + id + '-full' + '.jpg').delete().then(() => {
        })
        .catch(() => {
          //file doesn't exist
        })
      }).catch(() => {
        //file doesn't exit
      })
    }
    else {
      console.log('invalid id ' + id)
    }
    dispatch(deleteWord(id))
  }
}

var setWordListRequest = () => {
  return (dispatch) => {
    return database.ref('/users/' + commons.getAuth() + '/words').once('value', (snapshot) => {
      var words = snapshot.val();
      if(!words || words.length === 0) {
        words = []
      }
      else {
        words = Object.keys(words).map((key) => {
          var {nextReviewTime, reviews} = words[key];
          reviews = commons.getReviews(reviews)
          nextReviewTime = commons.daysUntil(nextReviewTime);

          return {
            ...words[key],
            nextReviewTime,
            reviews,
            id: key
          }
        });
      }
      dispatch(setWordList(words));
      dispatch(orderWords(null));
    });
  }
}

module.exports = {
  addWord,
  addWordRequest,
  setWordList,
  setWordListRequest,
  orderWords,
  setOrder,
  updateWordReviews,
  editWordReviewTime,
  editWordRequest,
  deleteWordRequest
};
