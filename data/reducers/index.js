import { combineReducers } from 'redux';
import navigation from './navigation'
import todos from './todos'

const wordsmithApp = combineReducers({
  navigation,
  todos
});

export default wordsmithApp;
