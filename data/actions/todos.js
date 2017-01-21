import {database} from '../firebaseSetup';
import * as commons from '../commons'
import {editWordReviewTime, orderWords, updateWordReviews} from './words'

var completeTodo = (id) => {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}

var completeTodoRequest = (data) => {
  var {id, success} = data;
  return (dispatch) => {
    database.ref('/users/' + commons.getAuth() + '/todos/' + id).update({completed: true});
    let reviewsRef = database.ref('/users/' + commons.getAuth() + '/words/' + id + '/reviews')
    let reviewRef = reviewsRef.push();
    reviewRef.set({reviewTime: Date.now(), success});
    var nextReviewTime = new Date(Date.now());
    nextReviewTime.setDate(nextReviewTime.getDate() + 1);
    nextReviewTime = commons.convertToMidnight(nextReviewTime);
    let wordRef = database.ref('/users/' + commons.getAuth() + '/words/' + id).update({
      nextReviewTime
    })
    reviewsRef.once('value').then((snapshot) => {
      let reviews = snapshot.val()
      reviews = commons.getReviews(reviews)
      dispatch(updateWordReviews(id, reviews))
    })
    dispatch(editWordReviewTime({id, nextReviewTime}));
    dispatch(orderWords(null))
    dispatch(completeTodo(id))
  }
}

var loadTodos = (words, time) => {
  var todos = null;
  if(!words) {
    todos = []
  }
  else {
    todos = Object.keys(words).map((key) => {
      var {word, translation, completed, fullUrl, thumbnailUrl} = words[key];
      if(!translation) {
        translatiion = ''
      }
      if(!fullUrl) {
        fullUrl = ''
      }
      if(!thumbnailUrl) {
        thumbnailUrl = ''
      }
      return {
        id: key,
        word,
        translation,
        fullUrl,
        thumbnailUrl,
        completed
      }
    });
  }
  return {
    type: 'LOAD_TODOS',
    todos: todos,
    lastUpdatedTime: time
  }
}

var setTodosRequest = (updated) => {
  return (dispatch) => {
    console.log(updated + 'update')
    if(!updated) {
      let updatedTime = Date.now();
      database.ref('/users/' + commons.getAuth() + '/lastUpdatedTime').set({time: updatedTime}).then(() => {
        //add set time of last update logic
        database.ref('/users/' + commons.getAuth() + '/words').once('value').then((snapshot) => {
          var words = snapshot.val();
          console.log('words')
          console.log(words)
          database.ref('/users/' + commons.getAuth() + '/todos').remove();
          for(var key in words) {
            var {nextReviewTime, thumbnailUrl, fullUrl, word, translation} = words[key];
            if(!thumbnailUrl) {
              thumbnailUrl = ''
            }
            if(!fullUrl) {
              fullUrl = ''
            }
            if(!translation) {
              translation = ''
            }
            if(nextReviewTime <= Date.now()) {
              let wordRef = database.ref('/users/' + commons.getAuth() + '/todos/' + key);
              wordRef.set({thumbnailUrl, fullUrl, word, translation, completed: false})
            }

          }
        })
        .then(() => {
          database.ref('/users/' + commons.getAuth() + '/todos').once('value').then((snapshot) => {
            let words = snapshot.val();
            console.log('not updated')
            console.log(words)
            dispatch(loadTodos(words));
          });
        })
      });
    }
    else {
      database.ref('/users/' + commons.getAuth() + '/todos').once('value').then((snapshot) => {
        let words = snapshot.val();
        console.log('updated')
        console.log(words)
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
