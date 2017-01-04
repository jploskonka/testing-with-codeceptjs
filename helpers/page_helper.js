'use strict';

class PageHelper extends Helper {
  refreshPage() {
    const browser = this.helpers['Nightmare'].browser

    return browser.refresh()
  }
}

module.exports = PageHelper;
