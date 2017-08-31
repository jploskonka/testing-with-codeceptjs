const assert = require('assert');

Feature('Remove todo');

const TODOS = require('../fixtures/todos.js').todos;

Scenario('User removes todo', function* (I, TodoList) {
  const todoContent = TODOS[0].title;
  const todoCount = yield* TodoList.getTodoCount();

  TodoList.remove(1);

  const newTodoCount = yield* TodoList.getTodoCount();
  assert.equal(newTodoCount, todoCount - 1);

  I.dontSee(todoContent, TodoList.listEl());

  I.refresh();
  I.dontSee(todoContent, TodoList.listEl());
});
