const todoInitialState = {text: '', image: ''};

const todo = (state = todoInitialState, action) => {
  if(!action) {
    return state;
  }
  switch(action.type) {
    case 'COMPLETE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: true
      }
    default:
      return state;
  }
}

var month = 12;
const todosInitialState = {isLoading: true, timeOfLastUpdate: new Date(2016, month - 1, 26),
                          todos: [
                          ]};

const todos = (state = todosInitialState, action) => {
  switch(action.type) {
    case 'LOAD_TODOS':
      return {
        ...state,
        isLoading: false,
        todos: action.todos
      }
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map(t => todo(t, action))
      }
    default:
      return state;
  }
}

export default todos
