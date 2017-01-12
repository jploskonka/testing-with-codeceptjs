Feature('Add todo');

Scenario('User adds a new todo', (I, TodoList) => {
  const todoContent = 'Learn testing with CodeceptJS';

  TodoList.add(todoContent);
  I.see(todoContent, TodoList.listEl());

  I.refreshPage();
  I.waitForText(todoContent, 1, TodoList.listEl());
});
