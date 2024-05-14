import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("user in login screen", async () => {
    cy.visit('https://bustlespot.gamzinn.com/login')
})

When("user enter the email and password",async function(){
    const title = cy.title()
    cy.log(title);
})

Then("Verify popup {string}", async function(message){
    cy.log("message :"+message)
})