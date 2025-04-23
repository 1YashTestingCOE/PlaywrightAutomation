import { test, expect, Page, TestInfo, Browser } from '@playwright/test';
import { LoginSause } from '../pages/sauseDemoPages/loginSause';
import { FormFill } from '../pages/sauseDemoPages/Form';
import { Dropdown } from '../pages/sauseDemoPages/dropDown';
import { BrowserControl } from '../Browser/BrowserControls';


test.describe('sause Demo Test Cases', () => {
let bc:BrowserControl;
   let page:Page;
   let testInfo1: TestInfo;
  test.beforeAll(async ({ browserName },testInfo) => {
    console.log('Starting the test');
    testInfo1 = testInfo;
    bc = new BrowserControl(testInfo);
    const browser:Browser = await bc.launchBrowser(browserName);
    page = await bc.openPageTab(browser);
   });


test('sause Demo Test Cases-with steps',{tag:['@sausedemo','@regression','@login']}, async () => {
    const  loginSause =new LoginSause(page);
    const  formFill =new FormFill(page);
    const  dropdown =new Dropdown(page);

    let copyUser :string ='standard_user';
    let copyPass :string ='secret_sauce';

    await test.step('step 1-launch Url and navigate to Sause Demo page',async()=>{
    await loginSause.navigateToURL('https://www.saucedemo.com/v1/index.html');
    console.log('Sause Demo URL Launched successfully');
    });
    await test.step('step 2-login to sause Demo ',async()=>{
        await loginSause.loginSauseDemo(copyUser,copyPass);
        console.log('login successfully in Sause Demo ');
    });
    await test.step('step 3-validate add to cart count ',async()=>{
        await loginSause.validateAddtoCartCount();
        console.log('Add to cart count validate successfully');
    });
    await test.step('step 4-validate dropdown',async()=>{
        await dropdown.automateDropdown();
        console.log("Thank you message validated successfully.");
    });
    await test.step('step 5-click on add to cart button ',async()=>{
        await page.reload();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await loginSause.validateAddtoCart();
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("product added in to cart and clicked checkout");
    });
    await test.step('step 6-Fill form',async()=>{
        await formFill.fillForm('Monali','Sutar','411046');
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("All fields added in form");
    });
    await test.step('step 7-validate price and name of item',async()=>{
        await formFill.validateEntries('Sauce Labs Backpack','$29.99');
        console.log("item price and item name are validated successfully.");
    });
    await test.step('step 8-validate Thank you message',async()=>{
        await formFill.validateThankYou('THANK YOU FOR YOUR ORDER');
        console.log("Thank you message validated successfully.");
    });
    await test.step('step 9-logout sauseDemo',async()=>{
        await formFill.logout();
        console.log("logout sauseDemo successfully.");
    });

 });

});