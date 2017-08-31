const assert = require('assert');

Feature('Add todo');

Scenario('User adds a new todo', function* (I, TodoList) {
  const todoContent = 'Learn testing with CodeceptJS';
  const todoCount = yield* TodoList.getTodoCount();

  TodoList.add(todoContent);

  const newTodoCount = yield* TodoList.getTodoCount();
  const lastTodo = TodoList.todoEl(newTodoCount);

  assert.equal(newTodoCount, todoCount + 1);

  I.see(todoContent, lastTodo);

  I.refresh();
  I.waitForText(todoContent, 1, lastTodo);
});
