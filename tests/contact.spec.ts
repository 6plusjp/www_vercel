import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Contact page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
    await page.getByTestId("reset").click();
  });

  test("validation should support each fields", async ({ page }) => {
    const nameInput = page.getByRole("textbox", { name: "お名前 / 会社名" });
    await nameInput.focus();
    await nameInput.blur();
    await expect(page.getByText("お名前 / 会社名は必須です")).toBeVisible();

    const emailInput = page.getByRole("textbox", { name: "メールアドレス" });
    await emailInput.focus();
    await emailInput.blur();
    await expect(page.getByText("メールアドレスは必須です")).toBeVisible();

    const textArea = page.getByRole("textbox", { name: "お問い合わせ内容" });
    await textArea.focus();
    await textArea.blur();
    await expect(page.getByText("お問い合わせ内容は必須です")).toBeVisible();
  });

  test("shouldn't submit without filling in a form", async ({ page }) => {
    await page.getByTestId("submit").click();
    await expect(
      page.getByRole("textbox", { name: "お名前 / 会社名" }),
    ).toBeFocused();

    const errors = await page.getByTestId("error-message").all();
    expect(errors).toHaveLength(3);

    await page.getByTestId("reset").click();
    await expect(page.getByText("必須です")).not.toBeVisible();
  });

  test("should not be cleared the form when the page is reloaded", async ({
    page,
  }) => {
    const username = faker.person.fullName();
    const email = faker.internet.email();
    const subjects = ["仕事のご依頼", "ご質問", "その他"];
    const subjectIndex = faker.number.int({ min: 0, max: 2 });

    await page.getByRole("textbox", { name: "お名前 / 会社名" }).fill(username);
    await page.getByRole("textbox", { name: "メールアドレス" }).fill(email);
    await page.selectOption('select[name="subject"]', subjects[subjectIndex]);
    await page
      .getByRole("textbox", { name: "お問い合わせ内容" })
      .fill(faker.lorem.text());

    await page.reload();

    await expect(page.getByText(username)).toBeVisible();
    await expect(page.getByText(email)).toBeVisible();
    await expect(page.getByText(subjects[subjectIndex])).toBeVisible();
  });
});
