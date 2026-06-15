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

Tasks:

1. Create a new feature branch for this issue.
2. Generate the required Playwright automation for the LeafTaps Create Lead scenario and Delete Lead scenario and verify it.
3. Apply the code changes.
4. Reuse the existing LoginPage, HomePage, MyHomePage, LeadsPage, and CreateLeadPage methods wherever applicable.
5. Create new methods only if the required functionality does not already exist.
6. Use the existing credentials configured in the framework:

   * Username: DemoCSR
   * Password: crmsfa
7. Navigate to the LeafTaps application:

   * URL: http://leaftaps.com/opentaps/control/main
8. Implement the following workflow:

   * Launch the browser.
   * Open the LeafTaps application.
   * Log in using valid credentials.
   * Verify successful login.
   * Click CRM/SFA.
   * Navigate to Leads → Create Lead.
   * Enter lead details:

     * Company Name: TestLeaf
     * First Name: John
     * Last Name: Smith
   * Click Create Lead.
   * Verify that the lead is created successfully.
   * Verify that the logged-in username is displayed correctly.
   * Navigate to Find Leads
   * Enter lead details:
      * Company Name: TestLeaf
      * First Name: John
      * Last Name: Smith
   * click on find leads
      * If found click on lead ID hyper link in the Lead list and update the company name
     * updated Company Name: Krishiv
     * click on update.
9. Run the relevant Playwright tests.
10. Fix any issues found during execution.
11. Commit the changes.
12. Push the branch to GitHub.
13. Create a Pull Request against main.

Provide:

* Branch name
* Commit hash
* Pull Request URL
* Test execution results
* Summary of page objects and utilities reused
* Details of any new methods introduced and the reason for adding them
