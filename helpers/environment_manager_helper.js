'use strict';

const TODOS = JSON.stringify(require('../fixtures/todos.js'));
const STORAGE_KEY = 'todos-vanillajs';

function setTodos(todos, storageKey, done) {
  localStorage.clear();
  localStorage.setItem(storageKey, todos);
  done();
}

class EnvironmentManager extends Helper { // eslint-disable-line no-undef
  _before() {
    this.helpers.Nightmare
      .executeAsyncScript(setTodos, TODOS, STORAGE_KEY);

    return this.openAndRefresh();
  }

  openAndRefresh() {
    this.helpers.Nightmare.amOnPage('/');
    return this.helpers.Nightmare.refresh();
  }
}

module.exports = EnvironmentManager;
