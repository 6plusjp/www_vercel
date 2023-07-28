describe("The page", () => {
  it("successfully loads", () => {
    cy.visit("/");

    cy.contains("Terms").click();
  });
});

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
