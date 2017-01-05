Feature('State togglers')

const todoContent = 'Learn testing with CodeceptJS';

Before((I, todoFragment) => {
  I.amOnPage('/');
  todoFragment.add(todoContent);
});

Scenario('User marks todo as done', (I, todoFragment) => {
  const context = todoFragment.todoEl(1);

  todoFragment.toggle(1);

  I.seeCheckboxIsChecked('.toggle', context);

  I.refreshPage();
  // Wait for todo to be loaded
  I.waitForElement(context);
  // Check toggler
  I.seeCheckboxIsChecked('.toggle', context);
});

Scenario('User marks todo as undone', (I, todoFragment) => {
  const context = todoFragment.todoEl(1);

  // This .toggle call is part of scenario setup,
  // because adding new todo would result in incomplete one.
  todoFragment.toggle(1);

  // And now the actual interaction which we want to test
  todoFragment.toggle(1);
  I.dontSeeCheckboxIsChecked('.toggle', context);

  I.refreshPage();
  // Wait for todo to be loaded
  I.waitForElement(context);
  // Check toggler
  I.dontSeeCheckboxIsChecked('.toggle', context);
});
