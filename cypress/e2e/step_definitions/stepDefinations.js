import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();




/*===============================================
    INVALID Login  
=================================================*/
Given('Users visits for the login',()=>{
  // cy.viewport(1920, 1080);
  cy.visit(data.pFlegetch);
  cy.wait(data.fourSecond)
})

When(`User enter email & passaword`,(dataTable)=>{
  dataTable.hashes().forEach((row) => {
    // Enter the email
    cy.get(locator.email).type(row.Email);

    // Enter the password
    cy.get(locator.Password).type(row.Passaword);
  });
})

Then(`Click on the login Button`,()=>{
  cy.get(locator.login).click()
  cy.wait(data.fiveSecond)
})

Then(`Check that user succesfully log in`,()=>{
  cy.get(locator.verifyName).should('contain.text', 'Mohammadullah Patwary');
})
Then(`Click on the shop button from nav`,()=>{
  cy.get(locator.Shoping).click()
})
Then(`Click on the product "Lenovo ThinkPad L15 Gen 4"`,()=>{
  cy.get(locator.product).click()

})
Then(`Check the Product is "Lenovo ThinkPad L15 Gen 4"`,()=>{
  cy.get(locator.hproduct).should('contain.text', 'Lenovo ThinkPad L15 Gen 4');
})

Then(`Check that Product count is one`,()=>{
  cy.get(locator.productCount).should('have.value', '1');
  cy.wait(data.oneSecond)
})
Then(`Click on the add to cart`,()=>{
  cy.get(locator.locatorcard).click()
})
Then(`Click on add to card from Nav`,()=>{
  cy.get(locator.addToCard).click()
})
Then(`Check the product & Quantity`,()=>{
  cy.get(locator.productCount).should('have.value', '1');

  cy.get(locator.checkTheProduct).should('contain.text', 'Lenovo ThinkPad L15 Gen 4');
  cy.wait(data.oneSecond)
})
Then(`Check out the product "Lenovo ThinkPad L15 Gen 4"`,()=>{
  cy.wait(data.oneSecond)
  cy.get(locator.abovescheckout).click()

})

Then(`Check that user can view the confirm order`,()=>{
  cy.get(locator.confirmOrder).should('contain.text', 'Bestellung bestätigen');
})