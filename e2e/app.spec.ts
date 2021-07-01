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
    expect(title).toBe("Save Some Text");
  });

  test("Displays user input in h1", async ({ page }) => {
    await page.click("input");
    // Fill input
    await page.fill("input", "This is working");

    const display = await page.innerText("span.display");

    expect(display).toEqual("This is working");
  });

  test("Retains text on refresh", async ({ page }) => {
    await page.click("input");
    // Fill input
    await page.fill("input", "This is working");

    let display = await page.innerText("span.display");

    expect(display).toEqual("This is working");

    await page.reload();

    display = await page.innerText("span.display");

    expect(display).toEqual("This is working");
  });
});
