Feature('Edit todo');

const TODOS = require('../fixtures/todos.js').todos;

Scenario('User edits todo', (I, todoFragment) => {
  const oldContent = TODOS[0].title;
  const newContent = 'Todo content after edit';
  const context    = todoFragment.todoEl(1);

  todoFragment.edit(1, newContent);

  I.dontSee(oldContent, context);
  I.see(newContent, context);

  I.refreshPage();
  I.waitForText(newContent, 1, context);
});
