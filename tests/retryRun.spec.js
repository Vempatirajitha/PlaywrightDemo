import { test, expect } from '@playwright/test';

test('rerun when failed the testcase', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');

// incorrect element, so test will fail //*[@id="root"]/div/div[1] - correct element
await page.locator('//*@id="root"]').screenshot({ path: './screenshots/element.png' });

//capture page screenshot
//await page.screenshot({ path: './screenshots/page.png' });

//capture full page screenshot
//await page.screenshot({ path: './screenshots/fullpage.png', fullPage: true });
//await page.waitForTimeout(3000);

});