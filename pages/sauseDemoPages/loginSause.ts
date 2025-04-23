import { test,Locator, Page, TestInfo, expect } from '@playwright/test';
 
export class LoginSause{
    readonly page :Page;
    readonly username :Locator;
    readonly password :Locator;
    readonly loginSubmit :Locator;
    readonly countAddtoCart :Locator;
    readonly clickAddtoCart :Locator;
    readonly clickCart :Locator;
    readonly clickCheckout :Locator;
    constructor(page :Page)
    {
        this.page=page;
        this.username=page.getByPlaceholder('Username');
        this.password=page.getByPlaceholder('Password');
        this.loginSubmit= page.getByText('LOGIN');
        this.countAddtoCart= page.locator('button.btn_primary');
        this.clickAddtoCart= page.locator('(//button[@class="btn_primary btn_inventory"])[1]');
        this.clickCart= page.locator('div.shopping_cart_container');
        this.clickCheckout= page.getByText('CHECKOUT');
    }
       async navigateToURL(url : string):Promise<void>{
        await this.page.goto(url);
      }
     
    async loginSauseDemo(user:string ,pass:string):Promise<void>{
        await this.username.fill(user);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.password.fill(pass);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.loginSubmit.click();
    }
    async validateAddtoCartCount():Promise<void>{
        await expect(this.countAddtoCart).toHaveCount(6); 
      }
      async validateAddtoCart():Promise<void>{
        await this.clickAddtoCart.click();
        await this.clickCart.click();
        await this.clickCheckout.click();
      }
}