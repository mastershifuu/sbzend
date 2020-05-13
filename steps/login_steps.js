
'use strict';

let I, loginPage;

module.exports = {
    _init() {
        I = require('../steps_file.js')();
        loginPage = require('../pages/login_page.js');
        loginPage._init();
    },

    async submitLogInForm(user) {
        I.waitForVisible(loginPage.fields.email);
        I.fillField(loginPage.fields.email, user.email);
        I.fillField(loginPage.fields.password, secret(user.password));
        I.click(loginPage.submitButton);
    },

    async verifyLoginErrorIsDisplayed(error) {
        I.waitForVisible(loginPage.loginError(error));
    },
};
