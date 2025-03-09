import { test, expect } from '@playwright/test';

test('Login demo test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('button:has-text("Login")').click();
});

