import {database} from '../firebaseSetup';

var loadTodos = (words, time) => ({
  type: 'LOAD_TODOS',
  words: words,
  time: time
})

var setTodosRequest = (updated) => {
  return (dispatch) => {
    if(!updated) {
      database.ref('/users/' + 'test/lastUpdatedTime').set({time: Date.now()}).then(() => {
        database.ref('/users/' + 'test/words').once('value').then((snapshot) => {
          var words = snapshot.val();
          for(var key in words) {
            var {nextReviewTime, imagePath, word, translation} = words[key];
            if(nextReviewTime <= Date.now()) {
              database.ref('/users/' + 'test/todos').set({nextReviewTime, imagePath, word, translation, completed: false})
            }
          }
        })
        .then(() => {
          database.ref('/users/' + 'test/todos').once('value').then((snapshot) => {
            let words = snapshot.val();
            dispatch(loadTodos(words));
          });
        })
      });
    }
    else {
      database.ref('/users/' + 'test/todos').once('value').then((snapshot) => {
        let words = snapshot.val();
        dispatch(loadTodos(words, Date.now()));
      });
    }
  }
}

module.exports = {
  setTodosRequest
}
