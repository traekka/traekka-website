describe("Landingpage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should display landingpage header", () => {
    cy.findAllByText("Hi you are on the test homepage").should("be.visible");
  });
  it("should take screenshot of the landingpage", () => {
    cy.findByRole("heading", {
      name: "Hi you are on the test homepage",
    }).should("be.visible");

    cy.percySnapshot("Landingpage");
  });
});
