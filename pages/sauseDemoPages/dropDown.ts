import { test,Locator, Page, TestInfo, expect } from '@playwright/test';
 
export class Dropdown{
    readonly page :Page;
    readonly dropDownClick :Locator;
    readonly price :Locator;
    constructor(page :Page)
    {
        this.page=page;
        this.dropDownClick=page.locator(".product_sort_container");
        this.price=page.locator('//div[@class="inventory_item"]').locator('.inventory_item_price');
    }
       async automateDropdown():Promise<void>{
        var priceList : number[]=[];
        await this.dropDownClick.click(); 
        await this.dropDownClick.selectOption('lohi'); 
    //     for(let i=1;i<=6;i++)
    //     {
    //         const priceWithCurrency=await this.page.locator('//div[@class="inventory_item"][${i}]').locator('.inventory_item_price').innerText();
    //         let itemPrice =Number(priceWithCurrency.slice(1))
    //         priceList.push(itemPrice);
            
    //     }
    //     let unSortedPricelist=[...priceList]
    //         console.log("original price list is :- " + unSortedPricelist);
    //          let acsending_orderList=priceList.sort((a,b)=>{return(a-b)})
    //          console.log("sorted price(low to high) list :-" + acsending_orderList);
    //   }
       }
    
}