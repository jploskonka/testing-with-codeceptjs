Feature('Removing todo');

Scenario('User removes todo', (I, todoFragment) => {
  const todoContent = 'Learn testing with CodeceptJS';
  const todoEl = '.todo-list';

  I.amOnPage('/');
  todoFragment.add(todoContent);
  todoFragment.remove();
  I.dontSee(todoContent, todoEl);
});
