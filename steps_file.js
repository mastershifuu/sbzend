// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    selectFromDropDown(selectLocator, itemToSelectLocator) {
      this.waitForVisible(selectLocator);
      this.click(selectLocator);
      this.waitForVisible(itemToSelectLocator);
      this.click(itemToSelectLocator);
    },

  });
}
