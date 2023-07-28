import { defineConfig } from "cypress";

const PORT = Number(process.env.PORT || 3000);

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${PORT}`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
