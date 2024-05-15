import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPageComponents from '../../pages/loginPageComponents';

const login = new loginPageComponents;

Given("user in login screen", async () => {
    await cy.fixture('config.json').then(async (data) => {
        await cy.visit(data.url);
    })
})

When("user enter the email and password", async function () {
    await login.loginToApp();
})

Then("Verify popup {string}", async function (message) {
    login.verifyToastMessage(message);
})