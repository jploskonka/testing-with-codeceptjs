const assert = require('assert');

Feature('Add todo');

Scenario('User adds a new todo', function* (I, todoList) {
  const todoContent = 'Learn testing with CodeceptJS';
  const todoCount = yield* todoList.getTodoCount();

  todoList.add(todoContent);

  const newTodoCount = yield* todoList.getTodoCount();
  const lastTodo = todoList.todoEl(newTodoCount);

  assert.equal(newTodoCount, todoCount + 1);

  I.see(todoContent, lastTodo);

  I.refreshPage();
  I.waitForText(todoContent, 1, lastTodo);
});
