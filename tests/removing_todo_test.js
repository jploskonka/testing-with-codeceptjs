Feature('Removing todo');

Scenario('User removes todo', (I) => {
  const todoContent = 'Learn testing with CodeceptJS';
  const todoEl = '.todo-list';

  I.amOnPage('/');
  I.fillField('.new-todo', todoContent);
  I.pressKey('Enter');
  I.click('.destroy', todoEl);
  I.dontSee(todoContent, todoEl);
});
