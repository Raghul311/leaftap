import { homePage } from "./3homePage";
import { locators } from "../locators/xpath";

export class lead extends homePage{
    async clickCreateLead(){
        await this.page.click(locators.clickCreateLead)  
    }
}