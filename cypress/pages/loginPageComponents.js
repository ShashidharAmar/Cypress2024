
export default class loginPageComponents {

    locators = {
        button: {
            login: "//button[text()='Login']",
            restPassword: "//button[text()='Reset Password']"
        },
        textField: {
            email: "//label[text()='Email ID']/..//input",
            password: "//label[text()='Password']/..//input",
            toastMessage: "//div[contains(@class,'MuiAlert-message')]",
            emailValidation: "//label[text()='Email ID']/..//p/span",
            passwordValidation: "//label[text()='Password']/..//p/span"
        },
        link: {
            forgotPassword: "//a[text()='Forgot password?']"
        }
    }

    async loginToApp() {
        await cy.fixture('config.json').then(async (data) => {
            await cy.xpath(this.locators.textField.email).type(data.emailId);
            await cy.xpath(this.locators.textField.password).type(data.password);
            await cy.xpath(this.locators.button.login).click();
        });
    }

    async verifyToastMessage(expectedText){
        cy.xpath(this.locators.textField.toastMessage).should('have.text', expectedText);
    }
}