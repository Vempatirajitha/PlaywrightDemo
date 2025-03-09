import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

//describe using to group the test cases
test.describe('all test cases of saucelabs demo', () => {
    //login test case & adding hooks
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html')
        //await page.pause(); 

    });
    // ---------------------

    //close the browser after all tests and adding hooks
    test.afterEach(async ({ page }) => {
        await page.close();
    });

    // add products to the cart test case
    test('add products to the cart', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="item-0-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await page.locator('[data-test="continue-shopping"]').click();
        // await page.pause(); 
        //await page.close();

    });

    //remove product test case
    test('remove products from the cart', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    });

    //logout test case
    test('logout', async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
    });


    test.describe('regression test cases', () => {

        test.beforeEach(async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await page.locator('[data-test="username"]').click();
            await page.locator('[data-test="username"]').fill('standard_user');
            await page.locator('[data-test="username"]').press('Tab');
            await page.locator('[data-test="password"]').fill('secret_sauce');
            await page.locator('[data-test="login-button"]').click();
            await page.waitForURL('https://www.saucedemo.com/inventory.html')
            //await page.pause(); 

        });
        // ---------------------

        //close the browser after all tests and adding hooks
        test.afterEach(async ({ page }) => {
            await page.close();
        });

        // add products to the cart test case
        test('add products to the cart1', async ({ page }) => {
            await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
            await page.locator('[data-test="item-0-title-link"]').click();
            await page.locator('[data-test="add-to-cart"]').click();
            await page.locator('[data-test="shopping-cart-link"]').click();
            await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
            await page.locator('[data-test="continue-shopping"]').click();
            // await page.pause(); 
            //await page.close();

        });

        //remove product test case
        test('remove products from the cart1', async ({ page }) => {
            await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            await page.locator('[data-test="shopping-cart-link"]').click();
            await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

        });

        //logout test case
        test('logout1', async ({ page }) => {
            await page.getByRole('button', { name: 'Open Menu' }).click();
            await page.locator('[data-test="logout-sidebar-link"]').click();
        });
    });
})

/* npx playwright test tests/hooksAndGroups.spec.js --project chromium --headed --repeat-each 2(test case will
run twice)
*/ 

