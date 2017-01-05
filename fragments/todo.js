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

  remove(position) {
    I.click('.destroy', `.todo-list > li:nth-child(${position})`);
  },

  edit(position, newContent) {
    I.doubleClick(`.todo-list > li:nth-child(${position}) label`);

    // YAY, I can use exepctations in page fragments!
    I.seeElement('input.edit', '.todo-list');

    // There's no need to scope to todo position here because
    // it's possible to have only one todo in editing state
    //
    // fillField does not accept a scoping argument :(
    //
    I.fillField('.todo-list .edit', newContent);
    I.pressKey('Enter');
  },

  toggle() {
    I.click('.toggle')
  }
}
