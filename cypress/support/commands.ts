declare namespace Cypress {
    interface Chainable<Subject> {
        login(email: any, password: any): Chainable<any>
        InvoicePageLodingVerification(): Chainable<any>
        addRandomItemToInvoice(number: any): Chainable<any>
        getIframe(selector: any): Chainable<any>
        setDiscount(percent: any): Chainable<any>
        selectCustomer(customer: any): Chainable<any>
        invoiceActions(action: any, discount: any, discountType: any): Chainable<any>
        searchAndSelectCustomer(searchCustomer: any, selectCustomer: any): Chainable<any>
  }
}