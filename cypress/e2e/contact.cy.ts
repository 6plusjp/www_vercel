import { Faker, ja, en, base } from "@faker-js/faker";

describe("Contact page", () => {
  const customFaker = new Faker({
    locale: [ja, en, base],
  });

  beforeEach(() => {
    cy.visit("/contact");
    cy.get('[data-cy="reset"]').click();
  });

  it("validation should support each fields", () => {
    cy.get("input[name=name]").as("name").focus();
    cy.get("@name").blur();
    cy.contains("お名前 / 会社名は必須です").should("exist");

    cy.get("input[name=email]").as("email").focus();
    cy.get("@email").blur();
    cy.contains("メールアドレスは必須です").should("exist");

    cy.get("textarea[name=text]").as("text").focus();
    cy.get("@text").blur();
    cy.contains("お問い合わせ内容は必須です").should("exist");
  });

  it("shouldn't submit without filling in a form", () => {
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error-message"]')
      .as("error")
      .should(($error) => {
        expect($error).to.have.length(3);
      });

    cy.get('[data-cy="reset"]').click();
    cy.contains("必須です").should("not.exist");
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
    cy.contains(username).should("not.exist");
    cy.contains(email).should("not.exist");
    cy.contains(subject[0]).should("exist");
    cy.contains(text).should("not.exist");
  });
});
