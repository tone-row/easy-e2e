import { test, expect } from "@playwright/test";
const { describe, beforeEach } = test;

describe("App", () => {
  beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
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
