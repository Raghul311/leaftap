import { homePage } from "./3homePage";
import { locators } from "../locators/xpath";

export class lead extends homePage{
    async clickCreateLead(){
        await this.page.click(locators.clickCreateLead)  
    }

    async clickFindLead(){
        await this.page.click(locators.clickFindLead);
        await this.page.waitForLoadState('networkidle');
    }

    async enterFindLeadDetails(company:string, firstName:string, lastName:string){
        // Find Leads form has different field IDs - try multiple selectors
        const companyFields = await this.page.$$('[id*="company"], [name*="company"]');
        if (companyFields.length > 0) {
            await companyFields[0].fill(company);
        }
        
        const firstNameFields = await this.page.$$('[id*="firstName"], [name*="firstName"]');
        if (firstNameFields.length > 0) {
            await firstNameFields[0].fill(firstName);
        }
        
        const lastNameFields = await this.page.$$('[id*="lastName"], [name*="lastName"]');
        if (lastNameFields.length > 0) {
            await lastNameFields[0].fill(lastName);
        }
    }

    async clickFindButton(){
        // Try multiple selectors for the Find button
        const buttons = await this.page.$$('button, input[type="submit"]');
        for (const button of buttons) {
            const text = await button.textContent();
            if (text && text.includes('Find')) {
                await button.click();
                break;
            }
        }
        await this.page.waitForLoadState('networkidle');
    }

    async clickLeadFromList(leadId:string){
        await this.page.click(`//a[contains(text(),"${leadId}")]`);
        await this.page.waitForLoadState('networkidle');
    }

    async updateLeadCompany(newCompanyName:string){
        // Find the company name field and update it - look for any field with company in the name
        const companyFields = await this.page.$$('[id*="company"], [name*="company"]');
        if (companyFields.length > 0) {
            await companyFields[0].fill(newCompanyName);
        } else {
            // Fallback - clear and fill the first text input
            await this.page.fill('input[type="text"]:first-of-type', newCompanyName);
        }
        
        // Click update button
        const updateButtons = await this.page.$$('button, input[type="submit"]');
        for (const button of updateButtons) {
            const text = await button.textContent();
            if (text && (text.includes('Update') || text.includes('Save'))) {
                await button.click();
                break;
            }
        }
        await this.page.waitForTimeout(5000);
    }

    async deleteLead(){
        // Look for delete link or button
        const deleteLinks = await this.page.$$('a, button');
        for (const link of deleteLinks) {
            const text = await link.textContent();
            if (text && text.includes('Delete')) {
                await link.click();
                break;
            }
        }
        await this.page.waitForLoadState('networkidle');
        
        // Confirm delete if there's a confirmation
        try {
            const confirmButtons = await this.page.$$('button, input[type="submit"]');
            for (const button of confirmButtons) {
                const text = await button.textContent();
                if (text && text.includes('Delete')) {
                    await button.click();
                    break;
                }
            }
            await this.page.waitForTimeout(5000);
        } catch (e) {
            // Delete might be confirmed on the previous click
        }
    }

    async getLeadIdFromCurrentPage(){
        // Get the partyId from the current URL or page
        const url = this.page.url();
        const match = url.match(/partyId=(\d+)/);
        return match ? match[1] : null;
    }
}

