export const FDIC_FAILED_BANK_LIST = "https://www.fdic.gov/bank-failures/failed-bank-list";


export const getFDICHomeLogo = () => cy.get('.logo-img[title="Home"]');
export const getFDICFailedBankListTitle = () => cy.get('[id="block-fdic-theme-node-title-block"]');
export const getFDICSearchBox = () => cy.get('[data-drupal-selector="edit-combine"]');
export const getFDICApplyButton = () => cy.get('[data-drupal-selector="edit-submit-failed-bank-list"]');
export const getFDICFailedBankList = () => cy.get('[data-once="tableheader"] tbody tr');
export const getFDICbankName = () => cy.get('[headers="view-title-table-column"]');
export const getFDICPageDropdown = () => cy.get('[data-drupal-selector="edit-items-per-page"]');
export const getFDICPageDropdownALLOption = () => cy.get('[data-drupal-selector="edit-items-per-page"][value="All"]');
