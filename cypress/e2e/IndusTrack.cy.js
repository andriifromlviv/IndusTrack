
import {
    PageElements
} from "../support/selectors"

const sel = new PageElements()

describe('IndusTrack tests', () => {
  
  beforeEach(() => {
    
    //Ignore uncaught exceptions
    cy.once('uncaught:exception', () => false);
    
    cy.clearLocalStorage()
    cy.visit('/')
 })


  it('Compare total price at the page with price in the invoice', () => {
    
    cy.Login(Cypress.env('username'), Cypress.env('password'))

    //Create a new invoice
    cy.get(sel.invoicesTab).click()   
    cy.get(sel.addNewInvoiceButton).click({force: true})
    cy.InvoicePageLodingVerification()
    
    //Search and choose a customer
    cy.get(sel.selectCustomerInput).should('be.visible').type(Cypress.env('searchCustomer'))
    cy.selectCustomer(Cypress.env('selectCustomer'))
    cy.get(sel.proceedButton).click()

    //Check, that total sum is zero before adding products
    cy.get(sel.totalPage).should('contain', 0)

    //Adding random items to the invoice
    cy.SelectRandomItem()
    cy.SelectRandomItem()

    //cy.setDiscount(10)
    cy.invoiceActions('Add discount', 10, '%')

    //Preview the invoice
    cy.contains(sel.actionsButton).click()
    cy.contains(sel.previewButton).click()

    //Compare total price at the page with price in the invoice
    cy.get(sel.totalPage).invoke('text').then((pageTotal) => {
      cy.getIframe("iframe")
      .get(sel.totalPage)
      .invoke('text')
      .should((invTotal) => {
        expect(pageTotal).to.eq(invTotal) 
      })
    })

    //cy.wait(2000)
    cy.get('.mat-dialog-actions .mat-button-wrapper').should('be.visible').click()

    cy.invoiceActions('Delete')

  }) 
})