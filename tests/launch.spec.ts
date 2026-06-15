import {test} from "@playwright/test";
test(`Launch browser`, async({page})=>{


    await page.goto("http://leaftaps.com/opentaps/control/main");
})