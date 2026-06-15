import { welcomePage } from "./2welcomePage";
import { locators } from "../locators/xpath";

export class homePage extends welcomePage{
    async createLead(){
        await this.page.click(locators.clickLead);
    }
    async createAccount(){
        await this.page.click(`//a[text()="Accounts"]`)
       
    }
    async createContact(){
        await this.page.click(`//a[text()="Contacts"]`)
        
    }
}