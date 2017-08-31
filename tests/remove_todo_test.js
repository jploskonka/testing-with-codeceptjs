const assert = require('assert');

Feature('Remove todo');

const TODOS = require('../fixtures/todos.js').todos;

Scenario('User removes todo', function* (I, todoList) {
  const todoContent = TODOS[0].title;
  const todoCount = yield* todoList.getTodoCount();

  todoList.remove(1);

  const newTodoCount = yield* todoList.getTodoCount();
  assert.equal(newTodoCount, todoCount - 1);

  I.dontSee(todoContent, todoList.listEl());

  I.refresh();
  I.dontSee(todoContent, todoList.listEl());
});
