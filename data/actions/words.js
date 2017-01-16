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
  type: 'EDIT_WORD'
}

var deleteWord = (id) => {
  type: 'DELETE_WORD',
  id
}

var addWordRequest = (data) => {
  var {thumbnailUrl, fullUrl, translation, word} = data;
  var createTime = Date.now();
  var nextReviewTime = new Date(createTime);
  nextReviewTime.setDate(nextReviewTime.getDate() + 1);
  nextReviewTime = commons.convertToMidnight(nextReviewTime);
  return (dispatch) => {
    var firebaseRef = database.ref('/users/' + 'test/words').push();
    var values = {
      thumbnailUrl,
      fullUrl,
      translation,
      word,
      nextReviewTime,
      createTime
    };
    firebaseRef.set(values);

    dispatch(addWord({...values, nextReviewTime: commons.daysUntil(nextReviewTime), reviews: []}));
    dispatch(orderWords(null));
  }
}

var editWordRequest = (data) => {
  //firebase call
  dispatch(editWord(data));
}
var deleteWordRequest = (id) => {
  //firebase call
  dispatch(deleteWord(id))
}

var setWordListRequest = () => {
  return (dispatch) => {
    return database.ref('/users/' + 'test/words').once('value', (snapshot) => {
      var words = snapshot.val();
      words = Object.keys(words).map((key) => {
        var {nextReviewTime, reviews} = words[key];
        if(reviews) {
          reviews = Object.keys(reviews).map((key) => {
            return reviews[key];
          });
        }
        else {
          reviews = [];
        }
        nextReviewTime = commons.daysUntil(nextReviewTime);

        return {
          ...words[key],
          nextReviewTime,
          reviews,
          id: key
        }
      });
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
  editWordReviewTime,
  editWordRequest,
  deleteWordRequest
};
