import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { flags } from "../src/content/flags";

// The flag is a build-time constant, so these tests follow whatever it is set to.
test.describe("coming soon flag", () => {
  test("shows the matching page", async ({ page }) => {
    await page.goto("/");
    if (flags.comingSoon) {
      await expect(page.getByRole("heading", { name: /coming soon/i })).toBeVisible();
      await expect(page.getByRole("img", { name: /beanies/i })).toBeVisible();
      await expect(page.getByRole("button", { name: /open menu/i })).toHaveCount(0);
    } else {
      await expect(page.getByRole("heading", { level: 1 })).toHaveText("Care that fits your pet");
      await expect(page.getByRole("heading", { name: /coming soon/i })).toHaveCount(0);
    }
  });
});

test.describe("full site", () => {
  test.skip(flags.comingSoon, "Coming soon page is on");

  test("has no automatically detectable accessibility violations", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test.describe("menu", () => {
    test("opens, closes and keeps aria-expanded in sync", async ({ page }) => {
      await page.goto("/");
      const button = page.getByRole("button", { name: /menu/i });
      const menu = page.getByRole("navigation", { name: "Main" });

      await expect(button).toHaveAttribute("aria-expanded", "false");
      await expect(menu).toBeHidden();

      await button.click();
      await expect(button).toHaveAttribute("aria-expanded", "true");
      await expect(menu).toBeVisible();

      await button.click();
      await expect(button).toHaveAttribute("aria-expanded", "false");
      await expect(menu).toBeHidden();
    });

    test("closes on Escape and returns focus to the button", async ({ page }) => {
      await page.goto("/");
      const button = page.getByRole("button", { name: /menu/i });
      await button.click();
      await page.keyboard.press("Escape");
      await expect(button).toHaveAttribute("aria-expanded", "false");
      await expect(button).toBeFocused();
    });

    test("closes when a link is chosen", async ({ page }) => {
      await page.goto("/");
      const button = page.getByRole("button", { name: /menu/i });
      await button.click();
      await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Price list" }).click();
      await expect(button).toHaveAttribute("aria-expanded", "false");
      await expect(page).toHaveURL(/#prices$/);
    });

    test("closes when clicking outside", async ({ page }) => {
      await page.goto("/");
      const button = page.getByRole("button", { name: /menu/i });
      await button.click();
      await page.mouse.click(5, 400);
      await expect(button).toHaveAttribute("aria-expanded", "false");
    });
  });

  test.describe("sticky booking bar (phone)", () => {
    test.skip(!flags.floatingBookingButton, "Floating booking button is off");
    test.use({ viewport: { width: 390, height: 800 } });

    test("shows between the hero buttons and the booking form", async ({ page }) => {
      await page.goto("/");
      // The bar is the last #book link in the DOM (after the hero and menu ones). Not getByRole,
      // which skips it while hidden and would match the hero button instead.
      const barLink = page.locator('a[href="#book"]').last();
      await expect(barLink).toBeHidden();

      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
      await expect(barLink).toBeVisible();
      // Wait for the fade and slide in to finish before measuring
      await expect(barLink.locator("..")).toHaveCSS("opacity", "1");
      await expect(barLink.locator("..")).toHaveCSS("transform", "none");
      // Floats well clear of the bottom edge (taps right at the edge are caught by iOS Safari's toolbar)
      const box = await barLink.boundingBox();
      expect(page.viewportSize()!.height - (box!.y + box!.height)).toBeGreaterThanOrEqual(48);

      await page.locator("#book").scrollIntoViewIfNeeded();
      await expect(barLink).toBeHidden();

      await page.evaluate(() => window.scrollTo(0, 0));
      await expect(barLink).toBeHidden();
    });
  });

  test("has no floating booking button while the flag is off", async ({ page }) => {
    test.skip(flags.floatingBookingButton, "Floating booking button is on");
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto("/");
    // Only the hero and menu links point at the form; a floating button would be a third
    await expect(page.locator('a[href="#book"]')).toHaveCount(2);
  });

  test.describe("booking form", () => {
    async function fillForm(page: import("@playwright/test").Page) {
      await page.getByLabel("Preferred date").fill("Saturday 12 December");
      await page.getByLabel("Pet's name").fill("Biscuit");
      await page.getByLabel("Type of pet").fill("Rabbit");
      await page.getByLabel("Address").fill("1 High Street, AB1 2CD");
      await page.getByLabel("Your name").fill("Alex Smith");
      await page.getByLabel("Email or phone").fill("alex@example.com");
    }

    test("shows a success message and resets after sending", async ({ page }) => {
      await page.route("https://forms.test/**", (route) => route.fulfill({ status: 200, json: { ok: true } }));
      await page.goto("/");
      await fillForm(page);
      await page.getByRole("button", { name: "Send request" }).click();
      await expect(page.getByRole("status")).toContainText("your request is in");
      await expect(page.getByLabel("Pet's name")).toHaveValue("");
    });

    test("shows an error message and keeps the input when sending fails", async ({ page }) => {
      await page.route("https://forms.test/**", (route) => route.fulfill({ status: 500 }));
      await page.goto("/");
      await fillForm(page);
      await page.getByRole("button", { name: "Send request" }).click();
      await expect(page.getByRole("status")).toContainText("Something went wrong");
      await expect(page.getByLabel("Pet's name")).toHaveValue("Biscuit");
    });

    test("does not send when the spam trap is filled in", async ({ page }) => {
      let requests = 0;
      await page.route("https://forms.test/**", (route) => {
        requests++;
        return route.fulfill({ status: 200, json: {} });
      });
      await page.goto("/");
      await fillForm(page);
      await page.locator('input[name="website"]').evaluate((el: HTMLInputElement) => (el.value = "spam"));
      await page.getByRole("button", { name: "Send request" }).click();
      await page.waitForTimeout(300);
      expect(requests).toBe(0);
    });

    test("does not send while required fields are empty", async ({ page }) => {
      await page.goto("/");
      await page.getByRole("button", { name: "Send request" }).click();
      await expect(page.getByRole("status")).toHaveText("");
    });
  });
});
