import { test as base, expect } from "@playwright/test";

type Fixtures = { url: string };

const test = base.extend<Fixtures>({
  url: process.env.E2E_START_URL ?? "http://localhost:3000",
});
const { describe, beforeEach } = test;

describe("App", () => {
  beforeEach(async ({ page, url }) => {
    await page.goto(url as string);
  });

  test("Correct Page Title", async ({ page }) => {
    const title = await page.title();
    expect(title).toBe("React App");
  });

  test("Displays user input in h1", async ({ page }) => {
    await page.click("input");
    // Fill input
    await page.fill("input", "This is working");
    // Double click text=This is working
    await page.dblclick("text=This is working");
    // Click text=This is working
    await page.click("text=This is working");

    const h1 = await page.innerText("h1");

    expect(h1).toEqual("This is working");
  });
});
