Feature('Edit todo');

const TODOS = require('../fixtures/todos.js').todos;

Scenario('User edits todo', (I, TodoList) => {
  const oldContent = TODOS[0].title;
  const newContent = 'Todo content after edit';
  const context    = TodoList.todoEl(1);

  TodoList.edit(1, newContent);

  I.dontSee(oldContent, context);
  I.see(newContent, context);

  I.refresh();
  I.waitForText(newContent, 1, context);
});
