
'use strict';

let I, header;

module.exports = {
    _init() {
        I = require('../steps_file.js')();
        header = require('../pages/fragments/header.js');
        header._init();
    },

    async verifyHomePageIsDisplayed(url) {
        I.seeCurrentUrlEquals(url);
    },

    async verifyAuthorizePageIsDisplayed() {
        I.seeInCurrentUrl('/authorize');
    },

    async clickOnLogInButton() {
        I.waitForVisible(header.logInHeaderButton);
        I.click(header.logInHeaderButton);
    },

    async verifyLogInHeaderButtonIsNotDisplayed() {
        I.waitForInvisible(header.logInHeaderButton)
    },

    async verifyUserEmailInHeader(email) {
        I.waitForVisible(header.userEmailButtonInHeader(email));
    },

    async openProfilePage(email) {
        I.selectFromDropDown(
            header.userEmailButtonInHeader(email),
            header.userProfileButtonInHeader,
        );
    },

    async logOut(email) {
        I.selectFromDropDown(
            header.userEmailButtonInHeader(email),
            header.logOutButtonInHeader,
        );
    }
};
