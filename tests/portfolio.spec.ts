import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E", () => {
  test.describe("Homepage", () => {
    test("loads successfully with expected content", async ({ page }) => {
      const response = await page.goto("/");
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(/6\+/);
      // Unique homepage headings (avoids the navbar/footer duplicate links)
      await expect(
        page.getByRole("heading", { name: "Web Engineer" }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", { name: "About Me" }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", { name: "Shoma Yamamoto" }),
      ).toBeVisible();
    });
  });

  test.describe("404 Page", () => {
    test("shows 404 for unknown routes", async ({ page }) => {
      const response = await page.goto("/this-page-does-not-exist-12345");
      expect(response?.status()).toBe(404);
      // ErrorBoundary renders the numeric status
      await expect(page.getByText("404")).toBeVisible();
    });
  });

  test.describe("RSS Feed", () => {
    test("returns valid RSS XML", async ({ request }) => {
      const response = await request.get("/blog/rss.xml");
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("xml");
      const body = await response.text();
      expect(body).toContain("<rss");
      expect(body).toContain("<channel>");
      expect(body).toContain("6+ Blog");
    });
  });

  test.describe("Resume PDF", () => {
    test("English resume returns PDF", async ({ request }) => {
      const response = await request.get("/resume/en/pdf");
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("application/pdf");
    });

    test("Japanese resume returns PDF", async ({ request }) => {
      const response = await request.get("/resume/ja/pdf");
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("application/pdf");
    });

    test("invalid lang returns 404", async ({ request }) => {
      const response = await request.get("/resume/fr/pdf");
      expect(response.status()).toBe(404);
    });
  });

  test.describe("Theme Toggle", () => {
    test("toggles theme and persists after reload", async ({ page }) => {
      await page.goto("/");
      const html = page.locator("html");

      // Wait until a theme class is applied (light or dark)
      await expect(html).toHaveClass(/\blight\b|\bdark\b/);

      // Read the initial theme so the test is independent of color-scheme emulation
      const classAttr = (await html.getAttribute("class")) ?? "";
      const startedDark = /\bdark\b/.test(classAttr);
      const afterFirstToggle = startedDark ? /\blight\b/ : /\bdark\b/;
      const afterSecondToggle = startedDark ? /\bdark\b/ : /\blight\b/;

      // The theme is persisted by a fetcher POST. In dev, React StrictMode also
      // fires a POST on mount, so match the request that carries the target
      // theme to make sure the cookie is written before we reload.
      const persistTheme = (target: "light" | "dark") =>
        page.waitForResponse((res) => {
          if (!res.url().includes("/action/set-theme")) return false;
          if (res.request().method() !== "POST") return false;
          return (res.request().postData() ?? "").includes(`theme=${target}`);
        });

      // Desktop viewport renders more than one toggle, so use .first()
      const firstTarget = startedDark ? "light" : "dark";
      const firstToggle = page
        .getByRole("button", { name: `switch to ${firstTarget} mode` })
        .first();
      await expect(firstToggle).toBeVisible();
      await Promise.all([persistTheme(firstTarget), firstToggle.click()]);
      await expect(html).toHaveClass(afterFirstToggle);

      // Reload and verify persistence via the theme session cookie
      await page.reload();
      await expect(html).toHaveClass(afterFirstToggle);

      // Toggle back
      const secondTarget = startedDark ? "dark" : "light";
      const secondToggle = page
        .getByRole("button", { name: `switch to ${secondTarget} mode` })
        .first();
      await expect(secondToggle).toBeVisible();
      await Promise.all([persistTheme(secondTarget), secondToggle.click()]);
      await expect(html).toHaveClass(afterSecondToggle);

      // Reload again and verify persistence
      await page.reload();
      await expect(html).toHaveClass(afterSecondToggle);
    });
  });
});
