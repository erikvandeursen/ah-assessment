const { Cypress } = window;

/* Get current baseUrl */
const { baseUrl } = Cypress.config();

/* Get current environment */
const envName = Cypress.env().name;

/* COMMANDS */
/* Reset local and session storage for each test case */
Cypress.Commands.add('resetStorage', () => {
  localStorage.clear();
  sessionStorage.clear();
});