import navigation from './navigation'
import todos from './todos'
import words from './words'
import add from './add'
import profile from './profile'

module.exports = {
  ...navigation,
  ...todos,
  ...words,
  ...add,
  ...profile
};
