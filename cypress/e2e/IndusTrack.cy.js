/// <reference types="cypress" />

import {
    PageElements
} from "../support/selectors"

const sel = new PageElements()

describe('Invoice price check', () => {
  
  
  it('passes', () => {
    
    //Ignore uncaught exceptions
    cy.once('uncaught:exception', () => false);
    
    cy.visit('/')

    cy.Login(Cypress.env('username'), Cypress.env('password'))

    
    
    
    cy.get(sel.invoicesTab).click({ force: true })
    //cy.get(sel.invoicesTab).click({ force: true })
    //cy.get(sel.invoicesTab).trigger("click");
  })
})