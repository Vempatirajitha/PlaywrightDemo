import{test, expect} from '@playwright/test';

test('Selectors demo', async ({page}) => {
    await page.goto('https://saucedemo.com/');
     await page.pause();
    // Selectors can be used to find elements on the page, using any object property.
    // await page.locator('id=user-name').fill('standard_user');
    await page.fill('#user-name', 'standard_user');

    //using xpath: await page.locator('//input[@id="password"]').fill('secret_sauce'); 
    // or await page.locator('xpath=//input[@id="password"]').fill('secret_sauce');
    await page.fill('#password', 'secret_sauce').waitFor({timeout: 2000});
    //using CSS selector: await page.locator('#login-button').click();
    //using Text: await page.locator('text="LOGIN"').click();or await page.locator('input:has-text("LOGIN")').click();
    await page.click('#login-button');

    // verify login sucessful
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});