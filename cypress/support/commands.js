const {
    PageElements
  } = require("../support/selectors")
  
  const sel = new PageElements()

  Cypress.Commands.add('Login', (username, password) => {
    cy.get(sel.userNameInput).clear().type(username)
    cy.get(sel.passwordInput).clear().type(password)
    cy.get(sel.loginButton).click()

    cy.get("[class='btn btn-primary btn-outline btn-lg active']").should('be.visible')
  })