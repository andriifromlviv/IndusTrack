
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

    cy.intercept('POST', 'https://onetrackwebapi.azurewebsites.net/api/AddressBooks/GeoLocate/').as('PageLoad')
    cy.wait('@PageLoad').its('response.statusCode').should('eq', 200)
  })


  Cypress.Commands.add('InvoicePageLodingVerification', ()=>{
    cy.intercept('POST', 'https://m.stripe.com/6').as('InvPageLoad')
    cy.wait('@InvPageLoad').its('response.statusCode').should('eq', 200)
  })


  Cypress.Commands.add('SelectRandomItem', ()=>{

    cy.get("[placeholder='Type to search']").click()
    
    cy.get("mat-option[class='mat-option mat-focus-indicator ng-star-inserted']").its('length').then(elCount =>{

      cy.get("mat-option[class='mat-option mat-focus-indicator ng-star-inserted']").eq(getRandomInt(elCount)).click()
    })

    if (Cypress.$(sel.confirmModalWindow).length > 0) {
      cy.contains('Yes').click()
    } 
  })

  Cypress.Commands.add('getIframe', (selector) => {
    return cy
        .get(selector)
        .its('0.contentDocument.body').should('not.be.empty')      
        .then(cy.wrap)
  })

  Cypress.Commands.add('setDiscount', (percent) => {
    cy.contains('Add').click({force: true})
    cy.get("[name = 'discountValue']").click().type(percent)
    cy.get("[name='discountKind']").select("%")
    cy.get('#modalAddDiscount .btn-primary').click()

  })

  Cypress.Commands.add('selectCustomer', (customer) => {
   //to be removed
    cy.wait(2000)
 
    cy.get(".customerselect ul").its('children').then((item) => {
      cy.get("li>b").each((el) => {
        // expect(el.text).to.be.equal(customer)
        if (el.text() == customer)
        cy.get(el).click()
      })
    })
  })