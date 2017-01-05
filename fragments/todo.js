'use strict';

let I;

module.exports = {
  _init() {
    I = actor();
  },

  todoEl(position) {
    return `.todo-list > li:nth-child(${position})`;
  },

  add(content) {
    I.fillField('.new-todo', content);
    I.pressKey('Enter');
  },

  remove(position) {
    I.click('.destroy', this.todoEl(position));
  },

  edit(position, newContent) {
    const context = this.todoEl(position);

    // I'm not sure why but using doubleClick with `label` as first
    // argument and context as second fails :(
    I.doubleClick(`${context} label`);

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

  toggle(position) {
    I.click('.toggle', this.todoEl(position));
  }
}
