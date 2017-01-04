Feature('State togglers');

const todoContent = 'Learn testing with CodeceptJS';

Before((I, todoFragment) => {
  I.amOnPage('/');
  todoFragment.add(todoContent);
});

Scenario('User marks todo as done', (I, todoFragment) => {
  todoFragment.toggle();

  I.seeCheckboxIsChecked('.toggle');

  I.refreshPage();
  // Wait for todo to be loaded
  I.waitForText(todoContent, '.todo-list');
  // Check toggler
  I.seeCheckboxIsChecked('.toggle');
});

Scenario('User marks todo as undone', (I, todoFragment) => {
  // This .toggle call is part of scenario setup,
  // because adding new todo would result in incomplete one.
  todoFragment.toggle();

  // And now the actual interaction which we want to test
  todoFragment.toggle();
  I.dontSeeCheckboxIsChecked('.toggle');

  I.refreshPage();
  // Wait for todo to be loaded
  I.waitForText(todoContent, '.todo-list');
  // Check toggler
  I.dontSeeCheckboxIsChecked('.toggle');
});
