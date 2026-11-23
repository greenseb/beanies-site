import { defineConfig, devices } from "@playwright/test";

// Minimal declaration so this file type-checks without @types/node.
declare const process: { env: Record<string, string | undefined> };

const port = 5199;

export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `pnpm dev --port ${port} --strictPort`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    // Fixed fake endpoint so the booking form tests don't depend on a local .env.
    // Requests to it are mocked in the tests and never leave the browser.
    env: { VITE_FORM_ENDPOINT: "https://forms.test/f/beanies" },
  },
});
