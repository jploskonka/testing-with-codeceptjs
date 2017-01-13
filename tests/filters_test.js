Feature('Filters');

const TODOS           = require('../fixtures/todos.js').todos;
const TODOS_ACTIVE    = TODOS.filter(t => !t.completed);
const TODOS_COMPLETED = TODOS.filter(t => t.completed);

Scenario('User does not apply any filter', (I, TodoList) => {
  TodoList.hasTodos(TODOS);
});

Scenario('User selects only active tasks', (I, TodoList) => {
  TodoList.selectActive();

  TodoList.hasTodos(TODOS_ACTIVE);
  TodoList.doesntHaveTodos(TODOS_COMPLETED);
});

Scenario('User selects only completed tasks', (I, TodoList) => {
  TodoList.selectCompleted();

  TodoList.hasTodos(TODOS_COMPLETED);
  TodoList.doesntHaveTodos(TODOS_ACTIVE);
});
