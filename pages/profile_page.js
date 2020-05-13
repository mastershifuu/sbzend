'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    name: `//span[@ng-hide="activeRow === 'name'"]`,
    email: `//span[@ng-hide="activeRow === 'email'"]`,
    password: `//span[@ng-hide="activeRow === 'password'"]`,
    phone: `//span[@ng-hide="activeRow === 'phone'"]`,
    address: `//span[@ng-hide="activeRow === 'address'"]`,
    supportPin: `//span[text()="Support pin"]/ancestor::div[@class="item"]//span[@class="text ng-binding"]`,
    newsletter: `//button[contains(@class,"toggle-btn")]`,
    newsletterOn: `//button[@class="toggle-btn on"]`,
    newsletterOff: `//button[@class="toggle-btn"]`,
};
