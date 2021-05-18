describe("App", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl, { responseTimeout: 31000 });
  });
  it("should render 40 links to job offers", () => {
    cy.checkNumberOfClients(40);
  });
});

export {};
