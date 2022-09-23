/// <reference types="cypress" />

export class PageElements{

    //Login form
    userNameInput = "#mat-input-0"
    passwordInput = "#mat-input-1"
    loginButton = ".mat-button-wrapper"
    
    invoicesTab = "[routerlink='/invoicesTab']"

    //Invoice
    addNewInvoiceButton = "[class='btn btn-sm btn-primary m-r-sm ng-star-inserted']"
    //selectCustomerInput = "[class='form-control customersearchinput ng-untouched ng-pristine ng-valid']"
    selectCustomerInput = "[type='text']"
    agapeMechanical = "//b[text()='Agape Mechanical']"
    proceedButton = "//button[text()='Proceed']"


}