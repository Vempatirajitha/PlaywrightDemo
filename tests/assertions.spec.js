import test, { page, expect } from '@playwright/test';

/*URL - toHaveURL(); title - toHaveTitle(); screenshot - toHaveScreenshot(); text - toHaveText(); attribute - toHaveAttribute(); class - toHaveClass(); visible - toBeVisible(); hidden - toBeHidden(); enabled - toBeEnabled(); disabled - toBeDisabled();
editable - toBeEditable(); visible - toBeVisible(); enabled - toBeEnabled(); disabled - toBeDisabled(); checked - toBeChecked(); selected - toBeSelected(); focus - toHaveFocus(); readonly - toBeReadonly(); empty - toBeEmpty(); filled - toBeFilled();
empty - toBeEmpty(); count - toHaveCount(); value - toHave Value();
*/
test('assertions practice', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/');
    await page.pause();
    //assertions: element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);

    //assertions: check the condition and do some action when use $ sign
    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click();
    }

    //check element hidden or visible; applying soft assertion to avoid test failure
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden();

    //check element has enabled or disabled; applying soft assertion to avoid test failure
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    //check element has text or not; applying soft assertion to avoid test failure
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('Game');

    await page.pause();
    //check attribute value of element with partial element class vlaue; applying soft assertion to avoid test failure
    //await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/      );
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)
    await expect.soft(page.locator('text=The Kitchen')).not.toHaveAttribute('class', 'header1');

    //check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/);

    await page.pause();
    //visual validation with screenshot
    await expect(page).toHaveScreenshot();

    

});