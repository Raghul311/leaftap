import { chromium, Page } from "playwright-core";
import { locators } from "../locators/xpath";

export class login{
    page:Page;
    constructor(temp:Page){
        this.page=temp;

    }
    async loadURL(url:string){
        await this.page.goto(url);
        
    }
    async cred(uname:string, pwd:string){
        await this.page.fill(locators.username,uname);
        await this.page.fill(locators.password,pwd);
    }
    async clickLogin(){
        await this.page.click(locators.clickLogin)
    }
}


