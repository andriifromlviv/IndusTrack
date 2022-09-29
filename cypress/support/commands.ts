declare namespace Cypress {
    interface Chainable<Subject> {
        Login(email: any, password: any): Chainable<any>
        InvoicePageLodingVerification(): Chainable<any>
        SelectRandomItem(): Chainable<any>
        getIframe(selector: any): Chainable<any>
        setDiscount(percent: any): Chainable<any>
        selectCustomer(customer: any): Chainable<any>
        invoiceActions(action: any, discount: any, discountType: any): Chainable<any>
  }
}