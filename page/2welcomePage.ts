import { login } from "./1loginPage"
import { locators } from "../locators/xpath";

export class welcomePage extends login{

    async clickCRMSFA(){
        await this.page.click(locators.clcikCRMSFA);
    }
}