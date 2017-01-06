Feature('Add todo');

Scenario('User adds a new todo', (I, todoFragment) => {
  const todoContent = 'Learn testing with CodeceptJS';

  todoFragment.add(todoContent);
  I.see(todoContent, '.todo-list');

  I.refreshPage();
  I.waitForText(todoContent, 1, '.todo-list');
});
