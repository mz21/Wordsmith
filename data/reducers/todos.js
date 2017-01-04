const todosInitialState = {isLoading: true, timeOfLastUpdate: new Date(2016, 11, 25),
                          todos: [
                          ]};

const todos = (state = todosInitialState, action) => {
  switch(action.type) {
    case 'LOAD_TODOS':
      return {
        ...state,
        timeOfLastUpdate: action.lastUpdatedTime,
        todos: action.todos,
        isLoading: false
      }
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(todo.id === action.id) {
            todo.completed = true;
          }
          return todo;
        })
      }
    case 'SET_UPDATED_TIME':
    return {
      ...state,
      timeOfLastUpdate: action.lastUpdatedTime
    }
    default:
      return state;
  }
}

export default todos
