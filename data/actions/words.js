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
  alert(data);
  var {imagePath, lastUpdated, timesForgotten, timesRemembered, translation, word} = data;
  return (dispatch) => {
    var firebaseRef = database.ref('/users/' + 'test/words').push();
    firebaseRef.set({
      imagePath,
      lastUpdated,
      timesForgotten,
      timesRemembered,
      translation,
      word
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
