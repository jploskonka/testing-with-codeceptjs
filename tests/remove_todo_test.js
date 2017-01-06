Feature('Remove todo');

const TODOS = require('../fixtures/todos.js').todos;

Scenario('User removes todo', (I, todoFragment) => {
  const todoContent = TODOS[0].title;

  todoFragment.remove(1);
  I.dontSee(todoContent, '.todo-list');

  I.refreshPage();
  I.dontSee(todoContent, '.todo-list');
});
