describe("Authorization Tests", () => {
  it("allows the user to signup for a new account", () => {
    cy.visit("/signup");
    cy.get("#email-field").type("user@email.com");
    cy.get("#confirm-email-field").type("user@email.com");
    cy.get("#password-field").type("testPassword1234");
    cy.get("button").contains("Create new account").click();

    cy.url().should("include", "/signup/success");
  });
});
