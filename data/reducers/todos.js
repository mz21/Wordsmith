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
const todosInitialState = {timeOfLastUpdate: new Date(2016, month - 1, 26),
                          todos: [
                            {id: 1, completed: false, text: 'homen', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 2, completed: true, text: 'mulheres', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 3, completed: false, text: 'obrigado', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 4, completed: false, text: 'fogo', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 5, completed: false, text: 'vermelho', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 6, completed: false, text: 'tudo bom', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 7, completed: false, text: 'desculpe', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 8, completed: false, text: 'incrivel', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 9, completed: false, text: 'horrivel', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 10, completed: true, text: 'ingles', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 11, completed: false, text: 'fala', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 12, completed: false, text: 'sete', image: 'https://facebook.github.io/react/img/logo_og.png'},
                            {id: 13, completed: false, text: 'seis', image: 'https://facebook.github.io/react/img/logo_og.png'},
                          ]};

const todos = (state = todosInitialState, action) => {
  switch(action.type) {
    case 'LOAD_TODOS':
      return {
        ...state,
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
