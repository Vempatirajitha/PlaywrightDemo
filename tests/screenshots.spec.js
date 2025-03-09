import { test, expect } from '@playwright/test';

test('capture screenshot', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');

//capture element screenshot
await page.locator('//*[@id="root"]/div/div[1]').screenshot({ path: './screenshots/element.png' });

//capture page screenshot
await page.screenshot({ path: './screenshots/page.png' });

//capture full page screenshot
await page.screenshot({ path: './screenshots/fullpage.png', fullPage: true });
await page.waitForTimeout(3000);

});