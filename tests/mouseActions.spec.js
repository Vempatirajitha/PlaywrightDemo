import{test, expect} from '@playwright/test';

test('mouse actions demo', async ({page}) => {

    await page.goto('https://www.google.com/');
    const searchBox = await page.locator("textarea[name='q']");
    await searchBox.fill('Playwright Automation');
    await page.waitForTimeout(3000);
    //wait for the suggestion list and select the first suggestion
    await page.waitForSelector('ul[role="listbox"] li'); // Ensure suggestions appear
    await page.locator('ul[role="listbox"] li').first().click();
    //wait for search restults and click on the first link
    await page.waitForSelector('h3');
     //click
    await page.locator('h3').first().click();
   
    //double click
    await page.getByRole('link', {name: 'playwright'}).first().dblclick();

    //mouse right click
    await page.getByRole('link', {name: 'playwright'}).first().click({button: 'right'});
    //mouse middle click
    await page.getByRole('link', {name: 'playwright'}).first().click({button: 'middle'});
    // mouse left click
    await page.getByRole('link', {name: 'playwright'}).first().click({button: 'left'});
    //mouse hover
    await page.locator("[aria-lable='Search by voice']").hover();
    //await page.hover('a[href="https://playwright.dev/"]');// hover over the link
    await page.waitForTimeout(3000);

});