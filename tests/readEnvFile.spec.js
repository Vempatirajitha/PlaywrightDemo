/*import { test, expect } from "@playwright/test";


test('Read Env File in playwright', async({ page }) => {

    // add the URL in the .env file and access it using process.env.URL in the test script
    // add require('dotenv').config(); in the playwright.config.js file to read the .env file
    await page.goto(process.env.URL);
    await page.locator("//input[@name='search_query']").click();
    await page.locator("//input[@name='search_query']").fill('Playwright');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(5000);

});
*/
import { test } from '@playwright/test';

test('Read Env File in Playwright', async ({ page }) => {
    // Check if URL is correctly loaded
    console.log("URL from .env:", process.env.URL);

    if (!process.env.URL) {
        throw new Error("Environment variable URL is not defined.");
    }

    await page.goto(process.env.URL);

    await page.locator("//input[@name='search_query']").click();
    await page.locator("//input[@name='search_query']").fill('Playwright');
    await page.keyboard.press('Enter');

    // to print user name and password from .env file
    console.log("Username is:" + process.env.USERNAME);
    console.log("Password is:" + process.env.PASSWORD);

    await page.waitForTimeout(5000);
});
