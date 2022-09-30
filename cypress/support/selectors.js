/// <reference types="cypress" />

export class PageElements{

    //Login form
    userNameInput = "#mat-input-0"
    passwordInput = "#mat-input-1"
    loginButton = ".mat-button-wrapper"
    
    //Invoice
    invoicesTab = "[routerlink='/invoicesTab']"
    addNewInvoiceButton = "[class='btn btn-sm btn-primary m-r-sm ng-star-inserted']"
    selectCustomerInput = "[type='text']"
    proceedButton = ".btn.btn-primary.m-r-sm"
    confirmModalWindow = "#cdk-overlay-1"
    searchField = "[placeholder='Type to search']"
    //Invoice actions
    actionsButton = "Actions"
    actionsDropDown = ".btn-group.pull-right.open > ul  a"
    previewButton = "Preview"

    totalPage = ".container-fluid td[style='color: black;']"
    totalInvoice = ".serviceparts td[style='color: black;']"


}