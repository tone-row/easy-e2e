import { browserType, launchConfig, contextConfig } from '../playwright.config'

const rootSelector = '#root';
let browser, context, page;

export const root = async () => await page.$(rootSelector);

export const load = async () => {
    browser = await browserType.launch(launchConfig);
    context = await browser.newContext(contextConfig);
    page = await context.newPage();
    // eslint-disable-next-line no-undef
    await page.goto(baseURL);
    return page;
};

export const close = async () => await browser.close();
