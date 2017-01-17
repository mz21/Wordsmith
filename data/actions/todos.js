import {database} from '../firebaseSetup';
import * as commons from '../commons'
import {editWordReviewTime, orderWords} from './words'

var completeTodo = (id) => {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}

var completeTodoRequest = (data) => {
  var {id, success} = data;
  return (dispatch) => {
    database.ref('/users/' + 'test/todos/' + id).update({completed: true});
    let reviewRef = database.ref('/users/' + '/test/words/' + id + '/reviews').push();
    reviewRef.set({reviewTime: Date.now(), success});
    var nextReviewTime = new Date(Date.now());
    nextReviewTime.setDate(nextReviewTime.getDate() + 1);
    nextReviewTime = commons.convertToMidnight(nextReviewTime);
    let wordRef = database.ref('/users/' + '/test/words/' + id).update({
      nextReviewTime
    })
    dispatch(editWordReviewTime({id, nextReviewTime}));
    dispatch(orderWords(null))
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
      let updatedTime = Date.now();
      database.ref('/users/' + 'test/lastUpdatedTime').set({time: updatedTime}).then(() => {
        //add set time of last update logic
        database.ref('/users/' + 'test/words').once('value').then((snapshot) => {
          var words = snapshot.val();
          database.ref('/users/' + 'test/todos').remove();
          for(var key in words) {
            var {nextReviewTime, imagePath, word, translation} = words[key];
            if(nextReviewTime <= Date.now()) {
              let wordRef = database.ref('/users/' + 'test/todos/' + key);
              wordRef.set({imagePath, word, translation, completed: false})
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

var setUpdatedTime = (time) => {
  return {
    type: 'SET_UPDATED_TIME',
    lastUpdatedTime: time
  }
}

module.exports = {
  loadTodos,
  setTodosRequest,
  completeTodoRequest,
  setUpdatedTime
}
