import { combineReducers } from 'redux';
import navigation from './navigation'
import todos from './todos'
import words from './words'

const wordsmithApp = combineReducers({
  navigation,
  todos,
  words
});

export default wordsmithApp;
