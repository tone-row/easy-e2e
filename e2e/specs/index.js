import { load, close } from '../pageObjects';

describe("React App", () => {
    let page;
    beforeEach(async () => {
        page = await load();
    });

    afterEach(async () => {
        await close();
    });

    it("should be titled 'React App'", async () => {
        const title = await page.title();
        expect(title).toBe('React App');
    });

    it("should display the user's input", async () => {
        // Go to http://localhost:3000/
        await page.goto('http://localhost:3000/');
        // Click input
        await page.click('input');
        // Fill input
        await page.fill('input', 'This is working');
        // Double click text=This is working
        await page.dblclick('text=This is working');
        // Click text=This is working
        await page.click('text=This is working');
        
        const h1 = await page.innerText('h1');
        
        expect(h1).toEqual("This is working");
    });
});
