
const {
    PageElements
  } = require("../support/selectors")
  
  const sel = new PageElements()

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  Cypress.Commands.add('Login', (username, password) => {
    cy.get(sel.userNameInput).clear().type(username)
    cy.get(sel.passwordInput).clear().type(password)
    cy.get(sel.loginButton).click()

    cy.get("[class='btn btn-primary btn-outline btn-lg active']").should('be.visible')
  })


  Cypress.Commands.add('InvoicePageLodingVerification', ()=>{
    cy.intercept('POST', 'https://m.stripe.com/6').as('InvPageLoad')
    cy.wait('@InvPageLoad').its('response.statusCode').should('eq', 200)
  })


  Cypress.Commands.add('SelectRandomItem', ()=>{

    cy.get("[placeholder='Type to search']").click()
    //number of items in drop down list
    let a = Cypress.$("mat-option[class='mat-option mat-focus-indicator ng-star-inserted']").length

    cy.get("mat-option[class='mat-option mat-focus-indicator ng-star-inserted']").eq(getRandomInt(a)).click()

  })