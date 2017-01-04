Feature('Removing todo');

Scenario('User removes todo', (I, todoFragment) => {
  const todoContent = 'Learn testing with CodeceptJS';

  I.amOnPage('/');
  todoFragment.add(todoContent);
  todoFragment.remove();
  I.dontSee(todoContent);
});
