import {test} from "../utils/customeFixtures"
import credentials from "../data/userDetails.json"

const leadDetails = {
    company: "TestLeaf",
    firstName: "John",
    lastName: "Smith",
    updatedCompany: "Krishiv"
};

test(`Create Lead - Find Lead - Update Lead - Delete Lead`, async({lop,wp,hp,lp,cl,page})=>{
    // Step 1: Login
    await lop.loadURL(credentials[0].url);
    await lop.cred(credentials[0].userName, credentials[0].password);
    await lop.clickLogin();
    
    // Step 2: Navigate to CRM/SFA
    await wp.clickCRMSFA();
    
    // Step 3: Create Lead
    await hp.createLead();
    await lp.clickCreateLead();
    await cl.enterDetails(leadDetails.company, leadDetails.firstName, leadDetails.lastName);
    await cl.clickCreate();
    await cl.verifyLeadCreated();

})


