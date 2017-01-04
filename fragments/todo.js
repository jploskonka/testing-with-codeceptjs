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
    I.click('.destroy');
  },

  edit(oldContent, newContent) {
    I.doubleClick(oldContent);
    // YAY, I can use exepctations in page fragments!
    I.seeElement('input.edit', '.todo-list');
    // fillField does not accept a scoping argument :(
    I.fillField('.todo-list .edit', newContent);
    I.pressKey('Enter');
  }
}
