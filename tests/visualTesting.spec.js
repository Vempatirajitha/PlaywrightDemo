import { test, expect } from '@playwright/test';

test('visual comparison testing', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://github.com/login');

    // Perform visual comparison
    await expect(page).toHaveScreenshot('githubpage.png');

    await page.locator('#login_field').click();
    await page.locator('#login_field').fill('username');
    await expect(page).toHaveScreenshot('githubpage.png');


    // Wait for 3 seconds (not necessary for visual testing, but included as per original code)
    //await page.waitForTimeout(3000);
});

        