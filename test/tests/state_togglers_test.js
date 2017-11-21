Feature('State togglers');

// Yay, no need for Before hook here.

Scenario('User marks todo as done', (I, todoList) => {
  todoList.toggle(1);
  I.seeCheckboxIsChecked(todoList.todoToggleEl(1));

  I.refresh();
  // Wait for todo to be loaded
  I.waitForElement(todoList.todoEl(1));
  // Check toggler
  I.seeCheckboxIsChecked(todoList.todoToggleEl(1));
});

Scenario('User marks todo as undone', (I, todoList) => {
  // Second todo in fixture is already completed
  // so there's no need to checking one as such before
  // interacting with it
  todoList.toggle(2);
  I.dontSeeCheckboxIsChecked(todoList.todoToggleEl(2));

  I.refresh();
  // Wait for todo to be loaded
  I.waitForElement(todoList.todoEl(2));
  // Check toggler
  I.dontSeeCheckboxIsChecked(todoList.todoToggleEl(2));
});
