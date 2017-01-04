Feature('Remove todo');

Scenario('User removes todo', (I, todoFragment) => {
  const todoContent = 'Learn testing with CodeceptJS';

  I.amOnPage('/');
  todoFragment.add(todoContent);
  todoFragment.remove();
  I.dontSee(todoContent, '.todo-list');

  I.refreshPage();
  // [#N What here?]
});
