// import { test } from "@playwright/test";
import {test} from "../utils/customeFixtures"
import { CreateLeadPage } from "../page/5DetailsCreateLead";
import credentials from "../data/userDetails.json"
import dotenv from "dotenv"
dotenv.config({path:"data/prod.env"})

test(`Create Lead`, async({lop,wp,hp,lp,cl})=>{
    //const cl= new CreateLeadPage(page);
    await lop.loadURL(process.env.ProdURL as string);
    await lop.cred(credentials[1].userName,credentials[1].password);
    await lop.clickLogin();
    await wp.clickCRMSFA();
    await hp.createLead();
    await lp.clickCreateLead();
    await cl.enterDetails();
    await cl.clickCreate();

})