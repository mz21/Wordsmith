const todosInitialState = {isLoading: true, timeOfLastUpdate: new Date(2016, 11, 25),
                          todos: [
                          ]};

const todos = (state = todosInitialState, action) => {
  switch(action.type) {
    case 'LOAD_TODOS':
      return {
        ...state,
        timeOfLastUpdate: action.lastUpdtedTime,
        todos: action.todos,
        isLoading: false
      }
    default:
      return state;
  }
}

export default todos
