'use strict';

// Local storage can handle only strings as keys or values
// thus usage of JSON.stringify on required fixture.
const TODOS = JSON.stringify(require('../fixtures/todos.json'));

// Don't use magic strings like `todos-vanillajs` across code,
// instead store it in constant with self-explaining name.
const STORAGE_KEY = 'todos-vanillajs';

// Note this function is not part of helper.
// It shouldn't be available for outside world so keep it outside
// of exported class.
function setTodos(todos, storageKey) {
  // Clear local storage before saving to it
  localStorage.clear();

  // Save todos in local storage
  localStorage.setItem(storageKey, todos);
}

/* global Helper */
class EnvironmentManager extends Helper {
  _before() {
    this.helpers.Nightmare.amOnPage('/');
    // console.log('before')
    // Access Nightmare helper
    // There's no semicolon at the end of this line!
    this.helpers.Nightmare

      // execute `setTodos` function in browser and pass
      // TODOS and STORAGE_KEY parameters to it
      .executeScript(setTodos, TODOS, STORAGE_KEY);

    // This one is important!
    // `executeScript` runs in browser context. To be able to do
    // that there needs to be page opened.
    // Because of it we can't populate local storage before opening
    // page but TodoMVC loads content on page load. So I have to refresh
    // my page after filling up local storage.
    return this.helpers.Nightmare.refresh();
  }
}

module.exports = EnvironmentManager;
