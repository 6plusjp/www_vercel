import { request } from "@playwright/test";

/**
 * Warms up the dev server before the test suite runs.
 *
 * Playwright starts the `webServer` before global setup, so we can safely hit
 * the main routes here. This compiles the routes and triggers Vite dependency
 * optimization up front, avoiding cold-start timeouts in the first tests.
 */
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";
const routes = ["/", "/works", "/blog", "/contact"];

export default async function globalSetup() {
  const context = await request.newContext({ baseURL });
  for (const route of routes) {
    await context.get(route, { failOnStatusCode: false }).catch(() => {});
  }
  await context.dispose();
}
