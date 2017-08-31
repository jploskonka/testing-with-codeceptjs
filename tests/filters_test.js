Feature('Filters');

const TODOS = require('../fixtures/todos.js').todos;
const TODOS_ACTIVE = TODOS.filter(t => !t.completed);
const TODOS_COMPLETED = TODOS.filter(t => t.completed);

Scenario('User does not apply any filter', (I, todoList) => {
  todoList.hasTodos(TODOS);
});

Scenario('User selects only active tasks', (I, todoList) => {
  todoList.selectActive();

  todoList.hasTodos(TODOS_ACTIVE);
  todoList.doesntHaveTodos(TODOS_COMPLETED);
});

Scenario('User selects only completed tasks', (I, todoList) => {
  todoList.selectCompleted();

  todoList.hasTodos(TODOS_COMPLETED);
  todoList.doesntHaveTodos(TODOS_ACTIVE);
});
