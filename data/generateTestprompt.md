You are an expert Playwright automation engineer.

## INPUTS

* GitHub Issue ID: {{ISSUE_ID}}
* GitHub Repo Owner: Raghul311
* GitHub Repo Name: leaftap
* Local Repo Path: /home/raghulkumar/Downloads/PW-20260615T081926Z-3-001/leaftap

## STEP 1 - Read the GitHub Issue

Using the GitHub MCP, read the issue with ID {{ISSUE_ID}} from the repo `https://github.com/Raghul311/leaftap/issues/3`.

Extract the following from the issue:

### Feature/functionality to be tested

Verify the **Create Lead** functionality in the Leaftaps application.

### Acceptance Criteria

* Log in with valid credentials.
* Click on **CRM/SFA**.
* Click on **Create Lead** from the shortcuts menu.
* Enter the **Company Name**, **Forename**, and **Surname**.
* Click on the **Create Lead** button.
* Verify that the **Company Name** is displayed correctly after lead creation.

### Additional Notes

* Automate the end-to-end lead creation flow in the Leaftaps application.
* Ensure the test validates that the lead is created successfully by verifying the company name shown on the confirmation/details page.

## STEP 2 - Explore the Local Repository Structure

Read the cloned repository from the local path:

`/home/raghulkumar/Downloads/PW-20260615T081926Z-3-001/leaftap`

* List all files and folders to understand the project structure.
* Identify the test directory and all existing test files.
* Read existing test files to understand naming conventions, patterns, fixtures, page objects, helper utilities, and reusable components already in use.
* Read any configuration files such as `playwright.config.ts`, `package.json`, `tsconfig.json`, `.env`, or any setup files.
* DO NOT overwrite or modify any existing test file under any circumstance.

## STEP 3 - Read the Guardrail File

Locate and read the guardrail file in the local repo (e.g., `guardrail.md` or a similar file).

You MUST strictly follow every instruction, rule, and convention mentioned in the guardrail file when generating the test.

## STEP 4 - Generate the Playwright Test Using Playwright MCP

Using the Playwright MCP:

* Launch a browser and navigate to the application URL used in the existing tests.
* Interact with the application to understand the actual UI flow for the feature described in the issue.
* Observe real selectors, page elements, navigation steps, and API calls triggered during the flow.
* Based on this real interaction + issue details (Step 1) + existing patterns (Step 2) + guardrail rules (Step 3), generate a NEW Playwright test script in TypeScript.
* Create the file in the correct test directory in the local repo.
* The test file must have a unique name that does not conflict with any existing test file.
* Follow the exact folder structure, naming conventions, and coding patterns of existing tests.
* Use existing fixtures, page objects, helper methods, utilities, and custom commands from the repo wherever applicable – do not duplicate logic.
* Generate the test using Playwright Test syntax (`test`, `expect`).
* Save the test with the appropriate TypeScript extension (e.g., `.spec.ts`).
* The test must cover all acceptance criteria mentioned in the issue.
* Add clear comments explaining each step in the test.
* The test must be accurate, runnable, and production-ready.

## STEP 5 - Run the Test

After generating the test file:

* Run the newly created test using the appropriate command (e.g., `npx playwright test <test_file_path>`) from the local repository path.
* Check the output carefully.
* If the test fails, debug and fix the script — repeat until the test passes successfully.
* Do NOT proceed to the next step if the test is still failing.

## STEP 6 - Raise a Pull Request

Once the test is passing:

* Stage and commit the new test file with a meaningful commit message referencing the issue (e.g., `feat: add create lead test - fixes #{{ISSUE_ID}}`).
* Push the branch to the remote repository.
* Using the GitHub MCP, create a Pull Request from the current branch to `main` with:

  * **Title**: `[Test] Verify Create Lead Functionality - Fixes #{{ISSUE_ID}}`
  * **Body**: Include a summary of what was tested, acceptance criteria covered, and a link to the issue.
  * **Labels**: `test`, `automation`.

## STRICT RULES

* NEVER overwrite an existing file.
* ALWAYS follow the guardrail file instructions.
* ALWAYS match the coding style and structure of existing tests in the local repo.
* Read all files locally — do NOT fetch repo file contents from GitHub MCP (only use GitHub MCP for reading the issue and creating the PR).
* Use Playwright MCP to interact with the real application and generate accurate tests based on actual UI behavior.
* Do NOT create the PR if the test is failing.
* The generated test must be complete and executable without manual edits.
* Generate only TypeScript Playwright tests compatible with the existing project setup.