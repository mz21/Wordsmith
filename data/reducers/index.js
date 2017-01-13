import { combineReducers } from 'redux';
import navigation from './navigation'
import todos from './todos'
import words from './words'
import add from './add'
import profile from './profile'

const wordsmithApp = combineReducers({
  navigation,
  todos,
  words,
  add,
  profile
});

export default wordsmithApp;
