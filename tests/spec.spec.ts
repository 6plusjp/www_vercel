import { test, expect } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test("homepage loads successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/6\+/);
    await expect(page.getByRole("heading", { name: /Shoma Yamamoto/i })).toBeVisible();
  });
});
