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
    

    // if (Cypress.$(".remindersbox").length > 0) {
    //   cy.contains('See All Reminders ').click()
    // }

    cy.get(sel.addNewInvoiceButton).click({force: true})

    cy.InvoicePageLodingVerification()
    cy.get(sel.selectCustomerInput).type("agape")
 

    cy.selectCustomer("Agape Mechanical")

    //cy.xpath(sel.agapeMechanical).click()
    cy.get(sel.proceedButton).click()

  //   //Check, that total sum is zero before adding products
    cy.get(sel.totalPage).should('contain', 0)

    cy.SelectRandomItem()
    cy.SelectRandomItem()

    cy.setDiscount(10)

    cy.contains(sel.actionsButton).click()
    cy.contains(sel.previewButton).click()

    cy.get(sel.totalPage).invoke('text').then((pageTotal) => {
      cy.getIframe("iframe")
      .get(sel.totalPage)
      .invoke('text')
      .should((invTotal) => {
        expect(pageTotal).to.eq(invTotal) 
    })



  })
  
  })
})