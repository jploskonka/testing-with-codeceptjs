Feature('Edit todo');

const TODOS = require('../fixtures/todos.json').todos;

Scenario('User edits todo', (I, todoList) => {
  const oldContent = TODOS[0].title;
  const newContent = 'Todo content after edit';
  const context = todoList.todoEl(1);

  todoList.edit(1, newContent);

  I.dontSee(oldContent, context);
  I.see(newContent, context);

  I.refresh();
  I.waitForText(newContent, 1, context);
});
