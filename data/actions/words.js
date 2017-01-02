import {database} from '../firebaseSetup';

var loadWords = () => ({
  type: 'LOAD_WORDS'
});
var getWords = () => {
  return (dispatch) => {
    return database.ref('/users/' + 'test/words').limitToFirst(3).once('value')
    .then((snapshot) => {
      var words = snapshot.val();
      dispatch(loadWords(words));
    }, console.log);
  }
}

module.exports = {
  loadWords,
  getWords
};
