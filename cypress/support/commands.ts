declare namespace Cypress {
    interface Chainable<Subject> {
        Login(email: any, password: any): Chainable<any>
  }
}