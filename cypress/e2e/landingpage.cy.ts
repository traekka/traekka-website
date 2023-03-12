describe("Landingpage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should display landingpage header", () => {
    cy.findAllByText("Hi").should("be.visible");
  });
});
