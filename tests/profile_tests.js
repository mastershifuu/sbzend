Feature('Profile');
let user = require('./../test_data_config.js').user;
let compareData;

Before(async function(I, loginStep, profileStep, commonStep) {
    I.amOnPage('/');
    I.say('I log in and open profile page');
    await commonStep.clickOnLogInButton();
    await loginStep.submitLogInForm(user);
    await commonStep.openProfilePage(user.email);

    I.say('I grab profile data and log out');
    compareData = await profileStep.getFilledProfileData();
    await commonStep.logOut(user.email);
});

Scenario('My profile page. Client area', async function(I, loginStep, commonStep, profileStep) {

    I.say('I log in and open profile page');
    await commonStep.clickOnLogInButton();
    await loginStep.submitLogInForm(user);
    await commonStep.openProfilePage(user.email);

    I.say('I check profile fields');
    await profileStep.checkProfileDetails(compareData);
});

