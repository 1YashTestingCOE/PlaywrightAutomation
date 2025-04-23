import { test,Locator, Page, TestInfo, expect } from '@playwright/test';
 
export class FormFill{
    readonly page :Page;
    readonly fname :Locator;
    readonly lname :Locator;
    readonly zipCode :Locator;
    readonly continue :Locator;
    readonly itemPrice :Locator;
    readonly itemName :Locator;
    readonly finish :Locator;
    readonly thankYouMsg :Locator;
    readonly menu:Locator;
    readonly logoutBTN:Locator;
    
    constructor(page :Page)
    {
        this.page=page;
        this.fname=page.getByPlaceholder('First Name');
        this.lname=page.getByPlaceholder('Last Name');
        this.zipCode=page.getByPlaceholder('Zip/Postal Code');
        this.continue=page.getByText('CONTINUE');
        this.itemPrice=page.locator('(//div[@class="inventory_item_price"])[1]');
        this.itemName=page.locator('(//div[@class="inventory_item_name"])[1]');
        this.finish=page.getByText('FINISH');
        this.thankYouMsg=page.locator('h2.complete-header');
        this.menu=page.locator('div.bm-burger-button');
        this.logoutBTN=page.getByText('Logout');

    }
       async fillForm(fname : string,lname :string,zipcode:string):Promise<void>{
        await this.fname.fill(fname);
        await this.lname.fill(lname);
        await this.zipCode.fill(zipcode);
        await this.continue.click();
      }
      async validateEntries(itemName:string ,itemPrice:string):Promise<void>{
        await expect(this.itemName).toHaveText(itemName);
        await expect(this.itemPrice).toHaveText(itemPrice);   
        await  this.finish.click(); 
      }
      async validateThankYou(thankYou:string):Promise<void>{
        await expect(this.thankYouMsg).toHaveText(thankYou);
      }
      async logout():Promise<void>{
        
        await this.menu.click();
        await this.logoutBTN.click();
        
      }
    
}