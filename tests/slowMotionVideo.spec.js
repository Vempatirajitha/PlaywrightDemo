//to run on slow motion globally: add //video: 'on',
    //launchOptions:{
      //slowMo:1000
    //}, on playwright.config.js near use:{}
//to run on slow motion locally: 

import { test, expect, chromium } from '@playwright/test'

test('slow motion video recording demo', async()=>{

  //launch browser
  const browser = await chromium.launch({
    slowMo: 1000,
    headless: false,

  });

  //create a new incognito browser context
  const context = await browser.newContext({
    recordVideo:{
      dir: 'videos/',
      size: { width: 800, height: 600 }
    }
  });

  //crate a new page inside the context
  const page = await context.newPage();

  await page.goto('https://kitchen.applitools.com/');

  //dispose context once its no longer needed
  await context.close();


});


