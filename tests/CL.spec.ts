import { test } from "@playwright/test";
import { login } from "../page/login";

test(`Create Lead`, async({page})=>{
const log = new login(page);
log.loadURL(`http://leaftaps.com/opentaps/control/main`);
log.cred(`Demosalesmanager`,`crmsfa`);
log.clickLogin();

})
