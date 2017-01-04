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

var setUpdatedTime = (time) => ({
  type: 'SET_UPDATED_TIME',
  lastUpdatedTime: time
});

var loadTodosRequest = () => {
  return (dispatch) => {
    var wordsRef = database.ref('/users/' + 'test/words');
    var midnightToday = commons.convertToMidnight(new Date(Date.now()));
    wordsRef.orderByChild('nextReviewTime').endAt(midnightToday).once('value').then((snapshot) => {
      var words = snapshot.val();
      var todos = Object.keys(words)
                  .map((key) => {
                    var completed = false;
                    var nextReviewTime = words[key].nextReviewTime;
                    if(nextReviewTime > Date.now()) {
                      completed = true;
                    }
                    return {
                      id: key,
                      completed,
                      text: words[key].word,
                      image: 'https://facebook.github.io/react/img/logo_og.png'
                    }
                  });
      dispatch(loadTodos(todos));
    })
  }
};

var setTodosToday = () => {
  return (dispatch) => {

  }
}

var addReviewSessionRequest = (data) => {
  var {id, success} = data;
  return (dispatch) => {
    var wordRef = database.ref('/users/' + 'test/words/' + id);
    var nextReviewTime = new Date(Date.now());
    nextReviewTime.setDate(nextReviewTime.getDate() + 1) // logic to get next review time
    nextReviewTime = commons.convertToMidnight(nextReviewTime);

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
  addReviewSessionRequest,
  setTodosToday
};
