Feature('State togglers')

const TODOS = require('../fixtures/todos.js').todos;

// Yay, no need for Before hook here.

Scenario('User marks todo as done', (I, TodoList) => {
  TodoList.toggle(1);
  I.seeCheckboxIsChecked(TodoList.todoToggleEl(1));

  I.refresh();
  // Wait for todo to be loaded
  I.waitForElement(TodoList.todoEl(1));
  // Check toggler
  I.seeCheckboxIsChecked(TodoList.todoToggleEl(1));
});

Scenario('User marks todo as undone', (I, TodoList) => {
  // Second todo in fixture is already completed
  // so there's no need to checking one as such before
  // interacting with it
  TodoList.toggle(2);
  I.dontSeeCheckboxIsChecked(TodoList.todoToggleEl(2));

  I.refresh();
  // Wait for todo to be loaded
  I.waitForElement(TodoList.todoEl(2));
  // Check toggler
  I.dontSeeCheckboxIsChecked(TodoList.todoToggleEl(2));
});
