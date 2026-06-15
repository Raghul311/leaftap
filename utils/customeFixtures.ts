import { test as baseT } from "@playwright/test";
import { login } from "../page/1loginPage";
import { welcomePage } from "../page/2welcomePage";
import { homePage } from "../page/3homePage";
import { lead } from "../page/4leadPage";
import { CreateLeadPage } from "../page/5DetailsCreateLead";

type fixtures={
    lop:login,
    wp:welcomePage,
    hp:homePage,
    lp:lead,
    cl:CreateLeadPage
}

export const test = baseT.extend<fixtures>({
    lop: async({page},use)=> {
        const lop= new login(page);
        await use(lop)
        
    },
    wp: async({page},use)=> {
        const wp= new welcomePage(page);
        await use(wp)
    },
    hp:async({page},use)=> {
        const hp= new homePage(page)
        await use(hp)
    },
    lp: async({page},use)=> {
        const lp= new lead(page);
        await use(lp)
        
    },
     cl: async({page},use)=> {
        const cl= new CreateLeadPage(page);
        await use(cl)
        
    },

}) 