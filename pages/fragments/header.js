'use strict';

let I;

module.exports = {

    _init() {
        I = require('../../steps_file.js')();
    },

    logInHeaderButton: '//span[text()="Log in"]/parent::button',
    userProfileButtonInHeader: '//a[contains(.,"Profile")]',
    logOutButtonInHeader: '//button[contains(.,"Log out")]',
    userEmailButtonInHeader(email) {return `//button[contains(.,"${email}")]`},

};
