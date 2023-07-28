import { Faker, ja, en, base } from "@faker-js/faker";

describe("Contact page", () => {
  const customFaker = new Faker({
    locale: [ja, en, base],
  });

  beforeEach(() => {
    cy.visit("/contact");
  });

  it("submit shouldn't without filling in", () => {
    cy.get('[data-cy="submit"]').click();

    cy.get('[data-cy="error-message"]').should(($error) => {
      expect($error).to.have.length(3);
    });
  });

  it("passes", () => {
    const username = customFaker.person.fullName();
    const email = customFaker.internet.email();
    const subject = ["仕事のご依頼", "ご質問", "その他"];
    const subjectIndex = customFaker.number.int({ min: 0, max: 2 });
    const text = customFaker.lorem.text();

    cy.get("input[name=name]").type(username);
    cy.get("input[name=email]").type(email);
    cy.get("select[name=subject]").select(subject[subjectIndex]);
    cy.get("textarea[name=text]").type(text);

    cy.reload();

    cy.get("input[name=name]").should("contain", username);
    cy.get("input[name=email]").should("contain", email);
    cy.get("select[name=subject]").should("contain", subject[subjectIndex]);
    cy.get("textarea[name=text]").should("contain", text);
  });
});
