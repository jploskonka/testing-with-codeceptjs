'use strict';

let I;

module.exports = {
  _init() {
    I = actor();
  },

  add(content) {
    I.fillField('.new-todo', content);
    I.pressKey('Enter');
  },

  remove() {
    I.click('.destroy')
  }
}
