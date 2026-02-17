import { test, expect } from "@playwright/test";

test.describe("The page", () => {
  test("successfully loads", async ({ page }) => {
    await page.goto("/");
    await page.getByText("Terms").click();
  });
});

test.describe("My First Test", () => {
  test("does not do much", () => {
    expect(true).toBe(true);
  });
});
