import{test, expect } from '@playwright/test';

const testParameters = [ 'java script', 'python', 'post man tools']

for (const param of testParameters) {
    test(`Parametrize test cases: ${param}`, async ({ page }) => {
        await page.goto('https://www.youtube.com/');
        await page.getByPlaceholder('Search').click();
        await page.getByPlaceholder('Search').fill(param);
        await page.getByPlaceholder('Search').press('Enter');
        await page.waitForTimeout(3000);
    });
    }
    

