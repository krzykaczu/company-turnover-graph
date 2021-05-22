// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("checkNumberOfClients", (numberOfClients) => {
  cy.get("[data-cy=all-clients]").should("have.length", numberOfClients);
});
/* Cypress.Commands.add("stubGraphQL", (graphQlFixture) => {
  cy.fixture(graphQlFixture).then((mockedData) => {
    cy.on("window:before:load", (win) => {
      function fetch(path, { body }) {
        const { operationName } = JSON.parse(body);
        return responseStub(mockedData[operationName]);
      }
      cy.stub(win, "fetch", fetch)
        .withArgs("0.0.0.0:1337/graphql")
        .as("graphql");
    });
  });
});

const responseStub = (result) =>
  Promise.resolve({
    json: () => Promise.resolve(result),
    text: () => Promise.resolve(JSON.stringify(result)),
    ok: true,
  }); */
