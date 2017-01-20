import {database} from '../firebaseSetup';
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
    var firebaseRef = database.ref('/users/' + uid + '/words').push();
    var id = firebaseRef.key
    var values = {
      thumbnailUrl,
      fullUrl,
      translation,
      word,
      nextReviewTime,
      createTime
    };

    if(thumbnailUrl && fullUrl) {
      values.thumbnailUrl = uid + '/' + id + '-thumb' + '.jpg'
      values.fullUrl = uid + '/' + id + '-full' + '.jpg'
      commons.storeImageRequest({url: thumbnailUrl, urlType: 'thumb', imageType: null, userId: uid, imageId: id})
      commons.storeImageRequest({url: fullUrl, urlType: 'full', imageType: null, userId: uid, imageId: id})
    }
    firebaseRef.set(values);

    dispatch(addWord({...values, id, nextReviewTime: commons.daysUntil(nextReviewTime), reviews: []}));
    dispatch(orderWords(null));
  }
}

var editTodoRequest = (data) => {
  let {id, word, translation, thumbnailUrl, fullUrl} = data
  return (dispatch) => {
    if(id && id != '') {
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
    if(id && id != '') {
      let uid = commons.getAuth()

      if(thumbnailUrl && fullUrl) {
        commons.storeImageRequest({url: thumbnailUrl, urlType: 'thumb', imageType: null, userId: uid, imageId: id})
        commons.storeImageRequest({url: fullUrl, urlType: 'full', imageType: null, userId: uid, imageId: id})
        thumbnailUrl = uid + '/' + id + '-thumb' + '.jpg'
        fullUrl = uid + '/' + id + '-full' + '.jpg'
      }

      let updatePath = '/users/' + uid + '/words/' + id + '/'
      let updates = {}
      updates[updatePath + 'word'] = word
      updates[updatePath + 'translation'] = translation
      updates[updatePath + 'thumbnailUrl'] = thumbnailUrl
      updates[updatePath + 'fullUrl'] = fullUrl
      database.ref().update(updates)
      dispatch(editWord(data));
      dispatch(orderWords(null));
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
      console.log('wordss')
      console.log(words)
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
      console.log(words)
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
