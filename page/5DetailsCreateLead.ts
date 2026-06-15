import { lead } from "./4leadPage";
import { locators } from "../locators/xpath";

export class CreateLeadPage extends lead{
    async enterDetails(){
        await this.page.fill(locators.Cname,`TCS`);
        await this.page.fill(locators.Fname,`Raghul`);
        await this.page.fill(locators.Lname,`Kumar`)
        await this.page.selectOption(locators.saluation,{value:"LEAD_EMPLOYEE"});

    }

    async clickCreate(){
        await this.page.click(locators.clcikCreate);
        await this.page.waitForTimeout(10000);
    }
}