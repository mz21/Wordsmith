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
    var firebaseRef = database.ref('/users/' + 'test/words').push();
    var id = firebaseRef.key
    var values = {
      thumbnailUrl,
      fullUrl,
      translation,
      word,
      nextReviewTime,
      createTime
    };
    firebaseRef.set(values);

    dispatch(addWord({...values, id, nextReviewTime: commons.daysUntil(nextReviewTime), reviews: []}));
    dispatch(orderWords(null));
  }
}

var editTodoRequest = (data) => {
  let {id, word, translation, thumbnailUrl, fullUrl} = data
  return (dispatch) => {
    if(id && id != '') {
      let updatePath = '/users/' + 'test/todos/' + id + '/'
      let updates = {}
      updates[updatePath + 'word'] = word
      updates[updatePath + 'translation'] = translation
      updates[updatePath + 'thumbnailUrl'] = thumbnailUrl
      updates[updatePath + 'fullUrl'] = fullUrl
      database.ref().update(updates)
    }
    else {
      console.log('invalid id ' + id)
    }
    dispatch(editTodo(data))
  }
}

var editWordRequest = (data) => {
  return (dispatch) => {
    dispatch(editTodoRequest(data))
    let {id, word, translation, thumbnailUrl, fullUrl} = data
    let updatePath = '/users/' + 'test/words/' + id + '/'
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

var deleteTodoRequest = (id) => {
  return (dispatch) => {
    if(id && id != '') {
      database.ref('/users/' + 'test/todos/' + id).remove();
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
      database.ref('/users/' + 'test/words/' + id).remove();
    }
    else {
      console.log('invalid id ' + id)
    }
    dispatch(deleteWord(id))
  }
}

var setWordListRequest = () => {
  return (dispatch) => {
    return database.ref('/users/' + 'test/words').once('value', (snapshot) => {
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
