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
          todo.completed = true;
          return todo;
        })
      }
    default:
      return state;
  }
}

export default todos
