Feature('Login');
let user = require('./../test_data_config.js').user;
let baseUrl = require('./../test_data_config.js').baseUrl;

Before((I) => {
    I.amOnPage('/');
});

Scenario('Authorization page (Welcome back!)', async function(I, loginStep, commonStep) {

    I.say('I see Home page');
    await commonStep.verifyHomePageIsDisplayed(baseUrl);

    I.say('I click on Log In header button');
    await commonStep.clickOnLogInButton();

    I.say('I see authorize page');
    await commonStep.verifyAuthorizePageIsDisplayed();

    I.say('I submit log in form with valid credentials');
    await loginStep.submitLogInForm(user);

    I.say('I dont see Log In header button');
    await commonStep.verifyLogInHeaderButtonIsNotDisplayed()

    I.say('I see user email in header');
    await commonStep.verifyUserEmailInHeader(user.email)
});

let credentials = new DataTable(['email', 'password']);
credentials.add([user.email, 'invalidPass']);
credentials.add(['invalidUsername@mail.com', user.password]);
credentials.add(['invalidUsername@mail.com', 'invalidPass']);
Data(credentials).Scenario('Authorization page. Not registered user', async function (I, current, loginStep, commonStep){

    I.say('I click on Log In header button');
    await commonStep.clickOnLogInButton();

    I.say('I submit log in form with invalid credentials');
    await loginStep.submitLogInForm(current);

    I.say('I see "Uh oh! Email or password is incorrect" Login error');
    await loginStep.verifyLoginErrorIsDisplayed("Uh oh! Email or password is incorrect")

});
