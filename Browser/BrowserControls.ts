import { Browser, BrowserContext, chromium, firefox, Page, TestInfo } from '@playwright/test';

export class BrowserControl
{
 
 readonly testInfo:TestInfo;
 private browser:Browser;
 private browserContext:BrowserContext;

   constructor(testInfo:TestInfo){
    this.testInfo = testInfo;
   } 

    async launchBrowser(browserName:string):Promise<Browser>{
        try{
            if(browserName=="chromium"){
                this.browser = await chromium.launch({
                    headless: false,
                });
            }
            else if(browserName=="firefox"){
                this.browser = await firefox.launch({
                    headless: false,
                });
            }
            return this.browser;
        }
        catch(ex){
            throw ex;
        }    
        
    }

    async openPageTab(browser:Browser):Promise<Page>{
        try{
            this.browserContext = await browser.newContext();
            const page = await this.browserContext.newPage();
        return page;
        }
        catch(ex){

            throw new Error('Page tab not opened');
        }
    }

    async embedScreenshot(msg:string, page:Page):Promise<void>{
        const screenshot = await page.screenshot();
        await this.testInfo.attach(msg, {
          body: screenshot,
          contentType: "image/png",
        });
       
    }
    
    async closeBrowserContext():Promise<void>{
        await this.browserContext.close();
    }

}

