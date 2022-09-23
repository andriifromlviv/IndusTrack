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

    //Check, that total sum is zero before adding products
    cy.get("td[style='color: black;']").should('contain', 0)

    cy.get("[placeholder='Type to search']").click()
    cy.get("mat-option[class='mat-option mat-focus-indicator ng-star-inserted']").eq(2).click()

    cy.get("[placeholder='Type to search']").click()
    let a = cy.get("mat-option[class='mat-option mat-focus-indicator ng-star-inserted']").its('length')
    console.log(a)

  })
})