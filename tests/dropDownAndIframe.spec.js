import{test, expect} from '@playwright/test';

// write a testcase
test('Dropdown list,IFrames, Drag and Drop actions', async ({page}) => {
//go to URL
await page.goto('https://www.saucedemo.com/');
//fill the username
await page.fill('[data-test="username"]', 'standard_user');
//fill the password
await page.fill('[data-test="password"]', 'secret_sauce');
//click on login button
await page.click('[data-test="login-button"]');
//wait for the URL
await page.waitForURL('https://www.saucedemo.com/inventory.html');
//assert the URL
await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

//click on drodown list and select the option
const dropDownList = await page.locator('#header_container > div.header_secondary_container > div > span > select');
//assertion
//await expect(dropDownList).locator('text = Name(A to Z)');
//select the option
dropDownList.selectOption({label: 'Price (low to high)'});
await page.waitForTimeout(3000);

});

//iFrame, drag and drop validation test case
test.only('iFrame; drag and drop actions', async ({page}) => {

    await page.goto('https://jqueryui.com/droppable/');
    //identify & switch to iFrame
    const iFrameElement =  page.frameLocator('.demo-frame');

    //source and destinaation element

    const sourceElement = iFrameElement.locator('#draggable');
    const destinationElement = iFrameElement.locator('#droppable');

    //drag and drop action

    await sourceElement.dragTo(destinationElement);
    await page.waitForTimeout(3000);


});