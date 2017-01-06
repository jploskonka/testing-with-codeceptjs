Feature('State togglers')

const TODOS = require('../fixtures/todos.js').todos;

// Yay, no need for Before hook here.

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
  // Second todo in fixture is already completed
  // so there's no need to checking one as such before
  // interacting with it
  const context = todoFragment.todoEl(2);

  todoFragment.toggle(2);
  I.dontSeeCheckboxIsChecked('.toggle', context);

  I.refreshPage();
  // Wait for todo to be loaded
  I.waitForElement(context);
  // Check toggler
  I.dontSeeCheckboxIsChecked('.toggle', context);
});
