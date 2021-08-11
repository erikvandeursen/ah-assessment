import envName from '../support/commands';
import pageObjects from './pom.json';
import data from '../fixtures/data.json';

const Fields = pageObjects[envName];
const Data = data;

describe('Get amount of cards', () => {
beforeEach('Reset storage', () => {
  /* Reset storage for every test cases */
  cy.resetStorage();
});

  it('Submit no user id and request cards', () => {
    cy.visit('/');

    cy.get(Fields.idInput)
      .focus()
      .type('')

    cy.get(Fields.idSubmit)
      .click();

    cy.get(Fields.errorMsg)
      .should('be.visible');

    cy.get(Fields.getAmountCards)
      .should('not.contain'. Data.amountCards);
  });

  it('Submit invalid user id and request cards', () => {
    cy.visit('/');

    cy.get(Fields.idInput)
      .focus()
      .type('1nV@l!d');

    cy.get(Fields.idSubmit)
      .click();

    cy.get(Fields.errorMsg)
      .should('be.visible');

    cy.get(Fields.getAmountCards)
      .should('not.contain'. Data.amountCards);
  });

  it('Submit user id and request cards, there is 1 card', () => {
    cy.visit('/');

    cy.get(Fields.idInput)
      .focus()
      .type(Data.userID);

    cy.get(Fields.idSubmit)
      .click();
    
    cy.get(Fields.errorMsg)
      .should('not.be.visible');

    cy.get(Fields.getAmountCards)
      .should('contain'. Data.amountCards)
      .should('eq', 1);
  });
})