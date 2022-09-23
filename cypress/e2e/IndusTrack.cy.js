/// <reference types="cypress" />

import {
    PageElements
} from "../support/selectors"

const sel = new PageElements()

describe('Invoice price check', () => {
  
  
  it('Login, initial price check', () => {
    
    //Ignore uncaught exceptions
    cy.once('uncaught:exception', () => false);
    
    cy.visit('/')

    cy.Login(Cypress.env('username'), Cypress.env('password'))

    cy.get(sel.invoicesTab).click({ force: true })
    cy.get(sel.addNewInvoiceButton).click()
    //cy.contains(' Search').should('be.visible')
    //cy.get(sel.selectCustomerInput).should('be.visible').and('have.attr', 'placeholder')

    cy.InvoicePageLodingVerification()
    cy.get(sel.selectCustomerInput).type("agape")

    //cy.get(sel.invoicesTab).click({ force: true })
    //cy.get(sel.invoicesTab).trigger("click");
  })
})