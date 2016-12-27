module.exports = {
  loadTodos: () => ({
    type: 'LOAD_TODOS'
  }),
  completeTodo: (id) => ({
    type: 'COMPLETE_TODO',
    id
  })
};
