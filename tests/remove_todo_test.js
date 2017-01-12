Feature('Remove todo');

const TODOS = require('../fixtures/todos.js').todos;

Scenario('User removes todo', (I, TodoList) => {
  const todoContent = TODOS[0].title;

  TodoList.remove(1);
  I.dontSee(todoContent, TodoList.listEl());

  I.refreshPage();
  I.dontSee(todoContent, TodoList.listEl());
});
