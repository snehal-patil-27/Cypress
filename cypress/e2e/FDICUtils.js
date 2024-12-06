import { getFDICSearchBox, getFDICApplyButton, getFDICFailedBankList } from "../pageObjects/FDICFailedBankPage"

export const verifyResults = (expectedLength) => {
    cy.scrollTo(0, 1000);
    getFDICFailedBankList().should('have.length', expectedLength);
};
  
export const searchAndApply = (searchTerm) => {
    getFDICSearchBox().type(searchTerm);
    getFDICApplyButton().click();
};