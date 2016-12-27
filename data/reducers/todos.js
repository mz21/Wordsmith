const todoInitialState = {text: '', image: ''};

const todo = (state = todoInitialState, action) => {
  if(!action) {
    return state;
  }
  switch(action.type) {
    case 'ADD_TODO':
       return {
         completed: false,
         text: action.text,
         image: 'https://facebook.github.io/react/img/logo_og.png'
       }
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
                            todo({id: 1, completed: false, text: 'homen', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 2, completed: true, text: 'mulheres', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 3, completed: false, text: 'obrigado', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 4, completed: false, text: 'fogo', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 5, completed: false, text: 'vermelho', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 6, completed: false, text: 'tudo bom', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 7, completed: false, text: 'desculpe', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 8, completed: false, text: 'incrivel', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 9, completed: false, text: 'horrivel', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 10, completed: true, text: 'ingles', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 11, completed: false, text: 'fala', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 12, completed: false, text: 'sete', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                            todo({id: 13, completed: false, text: 'seis', image: 'https://facebook.github.io/react/img/logo_og.png'}, undefined),
                          ]};

const todos = (state = todosInitialState, action) => {
  switch(action.type) {
    // case 'ADD_TODO':
    //   return {
    //     ...state,
    //     {
    //       todos: [
    //         ...state.todos,
    //         todo(undefined, action)
    //       ]
    //     }
    //   }
    case 'LOAD_TODOS':
      return state;
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
