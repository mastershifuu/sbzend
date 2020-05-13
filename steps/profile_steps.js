
'use strict';

let I, profilePage;

module.exports = {
    _init() {
        I = require('../steps_file.js')();
        profilePage = require('../pages/profile_page.js');
        profilePage._init();
    },

    async checkProfileDetails(data) {
        I.waitForVisible(profilePage.name);
        if (data.name) I.seeTextEquals(data.name, profilePage.name);
        if (data.email) I.seeTextEquals(data.email, profilePage.email);
        if (data.password) I.seeTextEquals(data.password, profilePage.password);
        if (data.phone) I.seeTextEquals(data.phone, profilePage.phone);
        if (data.address) I.seeTextEquals(data.address, profilePage.address);
        if (data.supportPin) I.seeTextEquals(data.supportPin, profilePage.supportPin);
        if (data.newsletter) {
            if (data.newsletter === 'Active') {I.seeElement(profilePage.newsletterOn)}
            else if(data.newsletter === 'InActive') {I.seeElement(profilePage.newsletterOff)}
        }
    },

    async getFilledProfileData() {
        I.waitForVisible(profilePage.name);
        let filledData = {
            name: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            supportPin: '',
            newsletter: '',
        };
        filledData.name = await I.grabTextFrom(profilePage.name);
        filledData.email = await I.grabTextFrom(profilePage.email);
        filledData.password = await I.grabTextFrom(profilePage.password);
        filledData.phone = await I.grabTextFrom(profilePage.phone);
        filledData.address = await I.grabTextFrom(profilePage.address);
        filledData.supportPin = await I.grabTextFrom(profilePage.supportPin);
        {
            filledData.newsletter = await I.grabAttributeFrom(profilePage.newsletter, 'class');
            if(filledData.newsletter === 'toggle-btn on') filledData.newsletter = 'Active';
            if(filledData.newsletter === 'toggle-btn') filledData.newsletter = 'InActive';
        }
        return filledData
    }

};
