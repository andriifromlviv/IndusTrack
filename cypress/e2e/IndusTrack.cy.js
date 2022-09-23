/// <reference types="cypress" />

import {
    PageElements
} from "../support/selectors"

const sel = new PageElements()

describe('Invoice price check', () => {
  
  beforeEach(() => {
    
    //Ignore uncaught exceptions
    cy.once('uncaught:exception', () => false);
    cy.clearLocalStorage()
    cy.visit('/')
 })


  it('Login, initial price check', () => {
    
    cy.Login(Cypress.env('username'), Cypress.env('password'))

    cy.get(sel.invoicesTab).click()
    cy.get(sel.addNewInvoiceButton).click()

    cy.InvoicePageLodingVerification()
    cy.get(sel.selectCustomerInput).type("agape")

    cy.xpath(sel.agapeMechanical).click()
    cy.xpath(sel.proceedButton).click()

  })
})