import { Faker, ja, en, base } from "@faker-js/faker";

describe("Contact page", () => {
  const customFaker = new Faker({
    locale: [ja, en, base],
  });

  beforeEach(() => {
    cy.visit("/contact");
  });

  it("validation should support each fields", () => {
    //TODO - replace find Func with the same as findText Func
    cy.get("input[name=name]").focus().blur();
    cy.get('[data-cy="error-message"]').should(
      "contain",
      "お名前 / 会社名は必須です",
    );
    cy.get("input[name=email]").focus().blur();
    cy.get('[data-cy="error-message"]').should(
      "contain",
      "メールアドレスは必須です",
    );
    cy.get("textarea[name=text]").focus().blur();
    cy.get('[data-cy="error-message"]').should(
      "contain",
      "お問い合わせ内容は必須です",
    );
  });

  it("shouldn't submit without filling in a form", () => {
    cy.get('[data-cy="submit"]').click();

    cy.get('[data-cy="error-message"]').should(($error) => {
      expect($error).to.have.length(3);
    });
  });

  it("should be cleare the form when the page is reloaded", () => {
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

    //TODO - decide if reloading keeps the information
    cy.get("input[name=name]").should("not.contain", username);
    cy.get("input[name=email]").should("not.contain", email);
    cy.get("select[name=subject]").should("contain", subject[0]);
    cy.get("textarea[name=text]").should("not.contain", text);
  });
});
