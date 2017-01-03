import {database} from '../firebaseSetup';

var loadTodos = () => ({
  type: 'LOAD_TODOS'
});

var completeTodo = (id) => ({
  type: 'COMPLETE_TODO',
  id
});
var addReviewSessionRequest = (data) => ({
  var {wordKey, success} = data;
  return (dispatch) => {
    var wordRef = database.ref('/users/' + 'test/words/' + wordKey);
    var nextReviewTime = Date.now();
    nextReviewTime.setDate(nextReviewTime.getDate() + 1);
    nextReviewTime.setHours(0);
    nextReviewTime.setMinutes(0);
    nextReviewTime.setSeconds(0);
    nextReviewTime.setMilliseconds(0);
    nextReviewTime = Date.parse(nextReviewTime);
    if(success) {
      wordRef.update({nextReviewTime})
    }
    var reviewRef = wordRef.child('reviews').push();
    reviewRef.set({
      reviewTime: Date.now(),
      success
    });

    dispatch(completeTodo(wordKey));
  }
})

module.exports = {
  loadTodos,
  completeTodo,
  addReviewSessionRequest
};
