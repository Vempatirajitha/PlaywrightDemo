import{test, expect} from '@playwright/test';

test('keyboard actions demo', async ({page}) => {
await page.goto('https://www.google.com/');
const searchBox = await page.locator("textarea[name='q']");
await searchBox.fill('Playwright Automation');
//press enter key
//await searchBox.press('Enter');

//press control+a & delete keys
//await searchBox.press('Control+a');
//await searchBox.press('Delete');

//press tab key
await searchBox.press('Tab');
await searchBox.press('Enter');

});
//validation of  date picker
test.only( 'date picker demo in playwright', async ({page}) => {

await page.goto('https://jqueryui.com/datepicker/');
const frameElement = await page.frameLocator('.demo-frame');
frameElement.locator('.hasDatepicker').click();
// date value
//frameElement.locator('.hasDatepicker').fill('03/10/2025');

//today's date
//frameElement.locator('.hasDatepicker').click();
//await frameElement.locator('.ui-datepicker-today').click();

//custom date value
const defaultDate = frameElement.locator('.ui-datepicker-today > a')
const currentDateValue = await defaultDate.getAttribute('data-date'); //03/05/2025 current date
let customDate = parseInt(currentDateValue) + 5; //03/10/2025

const element = "[data-date="+"'"+customDate+"'"+"]";
frameElement.locator(element).click();

await page.waitForTimeout(5000);

});