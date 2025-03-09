import { test, expect } from '@playwright/test';

test('Login demo test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com ');
    //await page.pause();
    await page.locator('[placeholder="Enter your username"]').fill('Rajitha');
    await page.locator('[placeholder="Enter your password"]').fill('Rajitha123');

    //await page.waitForSelector('text=Sign in', {timeout: 5000});
    await page.locator('text=Sign in').click();
    await page.locator('text=ACME').isVisible();

});

await page.waitForSelector('text=Sign in', { timeout: 4000 })
await expect(page.locator('text=Sign in')).toHaveCount(1)

/*test.only('Login demo test2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await page.pause();
    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('button:has-text("Login")').click();
    //await page.locator('p:has-text("Paul Collings")').click();
    await page.locator('text=Logout').click();
    //await page.close();

});
*/


test('Login demo test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('button:has-text("Login")').click();
});

test('Visit Example Page', async ({ page }) => {
    await page.goto('https://example.com');
});


test.only('Login demo test 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.locator('input[name="Email"]').click();
    await page.locator('input[name="Email"]').press('Control+a');
    await page.locator('input[name="Email"]').fill('admin@yourstore.com');
    await page.locator('input[name="Password"]').click();
    await page.locator('input[name="Password"]').press('Control+a');
    await page.locator('input[name="Password"]').fill('admin');
    await page.locator('text=Log in').click();
    await page.locator('#nopSideBarPusher i').click();
    await page.locator('text=Logout').click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.close();
});
