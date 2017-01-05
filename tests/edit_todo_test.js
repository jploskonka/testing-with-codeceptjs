Feature('Edit todo');

Scenario('User edits todo', (I, todoFragment) => {
  const oldContent = 'Learn testing with CodeceptJS';
  const newContent = 'Listen to the music'

  const context = todoFragment.todoEl(1);

  I.amOnPage('/');
  todoFragment.add(oldContent);
  todoFragment.edit(1, newContent);

  I.dontSee(oldContent, context);
  I.see(newContent, context);

  I.refreshPage();
  I.waitForText(newContent, context);
});
