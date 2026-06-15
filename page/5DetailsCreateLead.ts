import { lead } from "./4leadPage";
import { locators } from "../locators/xpath";

export class CreateLeadPage extends lead{
    async enterDetails(company:string = "TCS", firstName:string = "Raghul", lastName:string = "Kumar"){
        await this.page.fill(locators.Cname, company);
        await this.page.fill(locators.Fname, firstName);
        await this.page.fill(locators.Lname, lastName);
        await this.page.selectOption(locators.saluation,{value:"LEAD_EMPLOYEE"});
    }

    async clickCreate(){
        await this.page.click(locators.clcikCreate);
        await this.page.waitForTimeout(10000);
    }

    async verifyLeadCreated(){
        await this.page.waitForLoadState('networkidle');
        const pageTitle = await this.page.title();
        if (!pageTitle.includes('Lead')) {
            throw new Error('Lead detail page not loaded after creation');
        }
    }
}
