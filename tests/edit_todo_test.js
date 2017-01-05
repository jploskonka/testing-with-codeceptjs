Feature('Edit todo');

Scenario('User edits todo', (I, todoFragment) => {
  const oldContent = 'Learn testing with CodeceptJS';
  const newContent = 'Listen to the music'

  I.amOnPage('/');
  todoFragment.add(oldContent);
  todoFragment.edit(1, newContent);

  I.dontSee(oldContent, '.todo-list');
  I.see(newContent, '.todo-list');

  I.refreshPage();
  I.waitForText(newContent, '.todo-list');
});
