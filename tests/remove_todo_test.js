Feature('Remove todo');

Scenario('User removes todo', (I, todoFragment) => {
  const todoContent = 'Learn testing with CodeceptJS';

  I.amOnPage('/');
  todoFragment.add(todoContent);
  todoFragment.remove(1);
  I.dontSee(todoContent, '.todo-list');

  I.refreshPage();
  I.dontSee(todoContent, '.todo-list');
});
