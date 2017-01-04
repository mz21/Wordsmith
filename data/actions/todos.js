import {database} from '../firebaseSetup';

var completeTodo = (id) => {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}


var completeTodoRequest = (id) => {
  return (dispatch) => {
    database.ref('/users/' + 'test/todos' + id).update({completed: true});
    // set word success/failure to review session + update  nextReviewTime
    dispatch(completeTodo(id))
  }
}

var loadTodos = (words, time) => {
  var todos = Object.keys(words).map((key) => {
    var {word, translation, completed, imagePath} = words[key];
    return {
      id: key,
      word,
      translation,
      imagePath,
      completed
    }
  });
  return {
    type: 'LOAD_TODOS',
    todos: todos,
    lastUpdatedTime: time
  }
}

var setTodosRequest = (updated) => {
  return (dispatch) => {
    if(!updated) {
      database.ref('/users/' + 'test/lastUpdatedTime').set({time: Date.now()}).then(() => {
        database.ref('/users/' + 'test/words').once('value').then((snapshot) => {
          var words = snapshot.val();
          database.ref('/users/' + 'test/todos').remove();
          for(var key in words) {
            var {nextReviewTime, imagePath, word, translation} = words[key];
            if(nextReviewTime <= Date.now()) {
              console.log(word);
              let wordRef = database.ref('/users/' + 'test/todos').push();
              wordRef.set({imagePath, word, translation, completed: false})
            }
          }
        })
        .then(() => {
          database.ref('/users/' + 'test/todos').once('value').then((snapshot) => {
            let words = snapshot.val();
            console.log(words);
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
  loadTodos,
  setTodosRequest,
  completeTodoRequest
}
