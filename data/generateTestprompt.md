Issue ID: 1

Read and follow:
generateTestprompt.md
GUARDRAILS.md
security-checks.yml

Fetch GitHub Issue #1 from this repository: https://github.com/Raghul311/leaftap/issues/1

Analyze the existing Playwright framework.

Requirements:
Reuse existing page objects.
Reuse existing utility methods.
Do not create duplicate methods.
Follow framework conventions.
Follow all guardrails.

Feature:
Create Lead and update that lead – LeafTaps Application

Business Scenario:
As a valid user,
I want to log in to the LeafTaps application and create a new lead,
so that I can verify that the lead creation functionality works successfully.

Preconditions:

* User has access to the LeafTaps application.
* Valid login credentials are available in the existing code.
* User is on the login page.

Tasks:

1. Create a new feature branch for this issue.

2. Generate the required Playwright automation for the LeafTaps Create Lead and Update Lead scenario and verify it.

3. Apply the code changes.

4. Reuse the existing LoginPage, HomePage, MyHomePage, LeadsPage, and CreateLeadPage methods wherever applicable.

5. Create new methods only if the required functionality does not already exist.

6. Use the existing credentials configured in the framework:

   * Username: demoCSR
   * Password: crmsfa

7. Navigate to the LeafTaps application:

   * URL: http://leaftaps.com/opentaps/control/main

8. Implement the following workflow:

   * Launch the browser.
   * Open the LeafTaps application.
   * Enter the username mentioned in the code: demoCSR.
   * Enter the password mentioned in the code: crmsfa.
   * Click the Login button.
   * Verify that the user is logged in successfully.
   * Verify that the logged-in username is displayed correctly.
   * Click CRM/SFA.
   * Navigate to Leads → Create Lead in the shortcuts.
   * Enter the lead details:

     * Company Name: TestLeaf
     * First Name: John
     * Last Name: Smith
     * Source: Other
   * Click the Create Lead button.
   * Verify that the lead is created successfully.
   * Verify that the lead details page is displayed.
   * Verify navigation to lead creation completes without errors.
   * Click on Find Leads in the shortcuts.
   * In Find Leads, enter:

     * Company Name: TestLeaf
     * First Name: John
     * Last Name: Smith
   * Click Find Leads.
   * If a matching lead is found:

     * Click on the Lead ID hyperlink from the lead list.
     * Click Edit.
     * Update the Company Name with:

       * Updated Company Name: Krishiv
     * Click Update.
     * Verify that the company name has been updated successfully.

9. Run the relevant Playwright tests.

10. Fix any issues found during execution.

11. Commit the changes.

12. Push the branch to GitHub.

13. Create a Pull Request against main.

Automation Requirements:

* Follow the existing Page Object Model (POM) structure.
* Reuse existing LoginPage methods.
* Reuse existing HomePage, MyHomePage, LeadsPage, and CreateLeadPage methods.
* Reuse existing utility methods.
* Create new methods only if required.
* Follow the project GUARDRAILS.md guidelines.
* Use assertions to verify:

  * Successful login.
  * Logged-in username.
  * Successful lead creation.
  * Lead details page display.
  * Company name update success.

Sample Verification:

URL:
http://leaftaps.com/opentaps/control/main

Credentials:
Username: demoCSR
Password: crmsfa

Lead Details:

* Company Name: TestLeaf
* First Name: John
* Last Name: Smith
* Source: Other
* Updated Company Name: Krishiv

Provide:

* Branch name
* Commit hash
* Pull Request URL
* Test execution results
* Summary of page objects and utilities reused
* Details of any new methods introduced and the reason for adding them
