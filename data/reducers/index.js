import { combineReducers } from 'redux';
import navigation from './navigation'
import todos from './todos'
import words from './words'
import add from './add'

const wordsmithApp = combineReducers({
  navigation,
  todos,
  words,
  add
});

export default wordsmithApp;
