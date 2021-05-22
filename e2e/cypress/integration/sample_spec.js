describe("App", () => {
  beforeEach(() => {
    /* cy.intercept("POST", "http://0.0.0.0:1337/graphql", (req) => {
      if (req.body.operationName === "turnoverByClients") {
        req.reply({ fixture: "clientsAndTurnovers.json" });
      }
    }); */
    cy.visit(Cypress.config().baseUrl, {
      responseTimeout: 31000,
    });
  });
  /* beforeEach(() => {
    cy.stubGraphQL("clientsAndTurnovers.json");
    cy.visit(Cypress.config().baseUrl, {
      responseTimeout: 31000,
    });
  }); */
  it("should render fecth data and render clients names", () => {
    cy.checkNumberOfClients(40);
  });
  it("should lead to client specific url after clicking the ckient-ranks-chart rect", () => {
    cy.get("[class^=client-ranks-chart] svg > g > g > rect").first().click();
    cy.url().should("include", "/PATRICK");
  });
});

export {};
