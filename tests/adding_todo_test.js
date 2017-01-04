Feature('Adding todo');

Scenario('User adds a new todo', (I, todoFragment) => {
  const todoContent = 'Learn testing with CodeceptJS';

  I.amOnPage('/');
  todoFragment.add(todoContent);
  I.see(todoContent, '.todo-list');
});
