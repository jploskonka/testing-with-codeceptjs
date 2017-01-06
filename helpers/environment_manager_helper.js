'use strict';

const TODOS = JSON.stringify(require('../fixtures/todos.js'));
const STORAGE_KEY = 'todos-vanillajs';

function setTodos(todos, storageKey, done) {
  localStorage.setItem(storageKey, todos);
  done();
}

class EnvironmentManager extends Helper {
  _before() {
    this.helpers['Nightmare']
      .executeAsyncScript(setTodos, TODOS, STORAGE_KEY);

    return this.openAndRefresh();
  }

  openAndRefresh() {
    this.helpers['Nightmare'].amOnPage('/');
    return this.helpers['PageHelper'].refreshPage();
  }
}

module.exports = EnvironmentManager;
