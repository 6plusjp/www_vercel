import { mkdir } from "node:fs/promises";
import { chromium } from "@playwright/test";

/**
 * Regenerates the README screenshots.
 *
 * Usage:
 *   1. Start the dev server in one terminal: `npm run dev`
 *   2. In another terminal: `npm run screenshot`
 *
 * Override the target with env vars if needed:
 *   SCREENSHOT_BASE_URL=http://localhost:3000 SCREENSHOT_DIR=docs/assets
 */
const baseURL = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:3000";
const outDir = process.env.SCREENSHOT_DIR ?? "docs/assets";

const targets = [
  { name: "home", path: "/" },
  { name: "works", path: "/works" },
  { name: "blog", path: "/blog" },
  { name: "contact", path: "/contact" },
];

async function main() {
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      colorScheme: "light",
    });
    const page = await context.newPage();

    for (const target of targets) {
      const url = new URL(target.path, baseURL).toString();
      await page.goto(url, { waitUntil: "networkidle" });
      await page.screenshot({ path: `${outDir}/${target.name}.png` });
      console.log(`saved ${outDir}/${target.name}.png`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
