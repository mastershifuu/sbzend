'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },


    fields: {
        email: '[name=email]',
        password: '[name=password]'
    },
    submitButton: '//button[text()="Login"]',

    loginError(error) {return `//li[contains(@class,"notification information")]//span[text()="${error}"]`},
};
