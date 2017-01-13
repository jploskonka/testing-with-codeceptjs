'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // Element getters
  newFormEl: () => '.new-todo',
  listEl: () => '.todo-list',

  todoEl(position) {
    let el = '.todo-list > li';

    if(position)
      el = [el, `:nth-child(${position})`].join('');

    return el;
  },

  todoContentEl(position) {
    return `${this.todoEl(position)} label`;
  },

  todoEditEl(position) {
    // There's no need to scope to todo position here because
    // it's possible to have only one todo in editing state
    return `${this.listEl()} .edit`;
  },

  todoToggleEl(position) {
    return `${this.todoEl(position)} .toggle`;
  },

  todoDestroyEl(position) {
    return `${this.todoEl(position)} .destroy`;
  },

  // Content getters
  getTodoCount: function* () {
    return yield I.executeScript(el => {
      return document.querySelectorAll(el).length;
    }, this.todoEl());
  },

  // Interactions
  add(content) {
    I.fillField(this.newFormEl(), content);
    I.pressKey('Enter');
  },

  remove(position) {
   I.click(this.todoDestroyEl(position));
  },

  edit(position, newContent) {
    I.doubleClick(this.todoContentEl(position));

    I.fillField(this.todoEditEl(position), newContent);
    I.pressKey('Enter');
  },

  toggle(position) {
    I.click(this.todoToggleEl(position));
  }
}
