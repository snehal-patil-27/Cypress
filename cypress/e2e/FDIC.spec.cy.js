import { FDIC_FAILED_BANK_LIST, getFDICHomeLogo, getFDICFailedBankListTitle, getFDICSearchBox, getFDICApplyButton, getFDICbankName,
         getFDICPageDropdown } from "../pageObjects/FDICFailedBankPage"
import { verifyResults, searchAndApply} from "../e2e/FDICUtils"


describe('FDIC Failed Bank Page', () => {

  beforeEach(() => {
    // Visit the FDIC Failed Bank Page before each test
    cy.visit(FDIC_FAILED_BANK_LIST);
  });

  context('UI Validation', () => {
    it('Validates all UI components and the correct URL', () => {
      cy.url().should('eq', FDIC_FAILED_BANK_LIST);
      getFDICHomeLogo().should('be.visible');
      getFDICFailedBankListTitle()
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.equal('Failed Bank List');
      });
      getFDICSearchBox().should('be.visible').and('have.attr', 'placeholder', 'Search this Listing');
      getFDICApplyButton().should('be.visible');
      verifyResults(10);
    });
  });

  context('Search Functionality', () => {

    const SEARCH_TERM = 'Silicon';

    it('Search for Silicon and validate exactly one result is returned', () => {
      searchAndApply(SEARCH_TERM)
      verifyResults(1);
      getFDICbankName().should('contain.text', SEARCH_TERM);
    });

    it('Validate that there are 570 banks in the list', () => {
      getFDICPageDropdown().select('All');
      getFDICApplyButton().click();
      verifyResults(570);
    });
  });

})