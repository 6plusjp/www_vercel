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

    const errors = await page.getByRole("alert").all();
    expect(errors).toHaveLength(3);

    await page.getByTestId("reset").click();
    await expect(page.getByText("必須です")).not.toBeVisible();
  });

  test("reset button clears the entered values", async ({ page }) => {
    const name = faker.person.fullName();

    const nameInput = page.getByRole("textbox", { name: "お名前 / 会社名" });
    await nameInput.fill(name);
    await expect(nameInput).toHaveValue(name);

    await page.getByTestId("reset").click();
    await expect(nameInput).toHaveValue("");
  });
});
