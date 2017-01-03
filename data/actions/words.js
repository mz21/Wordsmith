import {database} from '../firebaseSetup';

var loadWords = () => ({
  type: 'LOAD_WORDS'
});
var addWord = () => ({
  type: 'ADD_WORD'
})
var loadWordsRequest = () => {
  return (dispatch) => {
    return database.ref('/users/' + 'test/words').limitToFirst(3).once('value')
    .then((snapshot) => {
      var words = snapshot.val();
      dispatch(loadWords(words));
    }, console.log);
  }
}

var addWordRequest = (data) => {
  var {imagePath, translation, word} = data;
  var createTime = Date.now();
  var nextReviewTime = new Date(createTime);
  nextReviewTime.setDate(nextReviewTime.getDate() + 1);
  nextReviewTime.setHours(0);
  nextReviewTime.setMinutes(0);
  nextReviewTime.setSeconds(0);
  nextReviewTime.setMilliseconds(0);
  nextReviewTime = Date.parse(nextReviewTime);
  return (dispatch) => {
    var firebaseRef = database.ref('/users/' + 'test/words').push();
    firebaseRef.set({
      imagePath,
      translation,
      word,
      nextReviewTime,
      createTime
    });

    dispatch(addWord());
  }
}

module.exports = {
  loadWords,
  loadWordsRequest,
  addWord,
  addWordRequest
};
