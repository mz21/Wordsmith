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

var addWord = (word) => ({
  type: 'ADD_WORD',
  word
});

var addWordRequest = (data) => {
  var {imagePath, translation, word} = data;
  var createTime = Date.now();
  var nextReviewTime = new Date(createTime);
  nextReviewTime.setDate(nextReviewTime.getDate() + 1);
  nextReviewTime = commons.convertToMidnight(nextReviewTime);
  return (dispatch) => {
    var firebaseRef = database.ref('/users/' + 'test/words').push();
    var values = {
      imagePath,
      translation,
      word,
      nextReviewTime,
      createTime
    };
    firebaseRef.set(values);

    dispatch(addWord({...values, reviews: []}));
  }
}

var setWordListRequest = () => {
  return (dispatch) => {
    return database.ref('/users/' + 'test/words').once('value', (snapshot) => {
      var words = snapshot.val();
      words = Object.keys(words).map((key) => {
        var {reviews} = words[key];
        if(reviews) {
          reviews = Object.keys(reviews).map((key) => {
            return reviews[key];
          });
        }
        else {
          reviews = [];
        }
        return {
          ...words[key],
          reviews,
          id: key
        }
      });
      dispatch(setWordList(words));
    });
  }
}

module.exports = {
  addWord,
  addWordRequest,
  setWordList,
  setWordListRequest,
  orderWords
};
