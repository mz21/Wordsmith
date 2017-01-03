import {database} from '../firebaseSetup';
import * as commons from '../commons';

var loadTodos = (todos) => ({
  type: 'LOAD_TODOS',
  todos
});

var completeTodo = (id) => ({
  type: 'COMPLETE_TODO',
  id
});

var loadTodosRequest = () => {
  return (dispatch) => {
    var wordsRef = database.ref('/users/' + 'test/words');
    var midnightToday = commons.convertToMidnight(new Date(Date.now()));
    wordsRef.orderByChild('nextReviewTime').endAt(midnightToday).once('value').then((snapshot) => {
      var words = snapshot.val();
      var todos =
      Object.keys(words)
      .map((key) => {
        return {
          id: key,
          completed: Math.random() > 0.3 ? false : true,
          text: words[key].word,
          image: 'https://facebook.github.io/react/img/logo_og.png'
        }
      });
      dispatch(loadTodos(todos));
    })
  }
};

var addReviewSessionRequest = (data) => {
  var {id, success} = data;
  return (dispatch) => {
    var wordRef = database.ref('/users/' + 'test/words/' + id);
    var nextReviewTime = new Date(Date.now())
    var nextReviewTime = commons.convertToMidnight(nextReviewTime.setDate(nextReviewTime.getDate() + 1));

    if(success) {
      wordRef.update({nextReviewTime})
    }
    var reviewRef = wordRef.child('reviews').push();
    reviewRef.set({
      reviewTime: Date.now(),
      success
    });

    dispatch(completeTodo(id));
  }
};

module.exports = {
  loadTodos,
  completeTodo,
  loadTodosRequest,
  addReviewSessionRequest
};
