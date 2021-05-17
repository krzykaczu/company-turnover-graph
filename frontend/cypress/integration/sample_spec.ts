describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should render 40 links to job offers", () => {
    // cy.get("[data-cy=all-offers] section").should("have.length", 7);
    cy.checkNumberOfClients(40);
  });
});

export {};
