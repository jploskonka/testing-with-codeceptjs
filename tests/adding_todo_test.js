Feature('Adding todo');

Scenario('User adds a new todo', (I) => {
  const todoContent = 'Learn testing with CodeceptJS';

  I.amOnPage('/');
  I.fillField('.new-todo', todoContent);
  I.pressKey('Enter');
  I.see(todoContent, '.todo-list');
});
