const todosInitialState = {isLoading: true, timeOfLastUpdate: new Date(2016, 11, 25),
                          todos: [
                          ]};

const todos = (state = todosInitialState, action) => {
  switch(action.type) {
    case 'LOAD_TODOS':
      console.log(action.words);
      return {
        ...state,
        timeOfLastUpdate: action.time,
        todos: action.words
      }
    default:
      return state;
  }
}

export default todos
