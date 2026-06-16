import { test } from "../utils/customeFixtures";
import credentials from "../data/userDetails.json";

/**
 * Verify Create Lead shows correct Company Name after creation
 * Acceptance Criteria:
 * - Log in with valid credentials
 * - Click CRM/SFA
 * - Navigate to Create Lead
 * - Enter Company, Forename, Surname
 * - Create lead and verify company name is displayed on details page
 */

test(`Verify Company Name After Lead Creation`, async ({ lop, wp, hp, lp, cl, page }) => {
  // Generate a unique company name to avoid collisions
  const company = `AutoCompany_${Date.now()}`;
  const firstName = `Alice`;
  const lastName = `Tester`;

  // Step 1: Login
  await lop.loadURL(credentials[0].url);
  await lop.cred(credentials[0].userName, credentials[0].password);
  await lop.clickLogin();

  // Step 2: Navigate to CRM/SFA
  await wp.clickCRMSFA();

  // Step 3: Open Create Lead
  await hp.createLead();
  await lp.clickCreateLead();

  // Step 4: Enter details and create
  await cl.enterDetails(company, firstName, lastName);
  await cl.clickCreate();
  await cl.verifyLeadCreated();

  // Step 5: Verify company name is visible on the lead details page
  // Use getByText which aligns with guardrail locator priorities
  const companyLocator = page.getByText(company, { exact: false });
  await companyLocator.first().waitFor({ state: 'visible' });

});
