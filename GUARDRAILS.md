# Playwright TypeScript Guardrails & Coding Standards

## General Rules

-   Use `@playwright/test` with TypeScript.
-   All tests MUST follow the Page Object Model (POM).
-   Every test should include a descriptive comment/docstring
    equivalent.
-   Use Playwright auto-waiting; avoid hardcoded waits.
-   Run tests in Chromium only for this demo.

## Existing File Immutability

-   NEVER modify, rename, reorder, or delete existing tests.
-   New code must be appended only.
-   Existing fixtures, constants, and page object methods must not be
    changed.
-   Surface conflicts as inline comments.

## POM Rules

-   Create separate Page Object classes in `pages/`.
-   Each Page Object represents one page/component.
-   Keep locators as class-level constants.
-   No assertions inside Page Objects.
-   No test logic in Page Objects.

## Locator Strategy

1.  getByRole
2.  getByLabel
3.  getByPlaceholder
4.  getByTestId
5.  getByText
6.  locator (CSS as last resort)

-   NEVER use XPath.
-   Avoid fragile selectors.

## Wait Strategy

-   Avoid `waitForTimeout()`.
-   Use Playwright auto-waiting.
-   Use `waitForLoadState()`, `waitForURL()`, or explicit waits only
    when necessary.

## Security

-   Never hardcode credentials.
-   Use `.env` and environment variables.
-   Never use eval/unsafe deserialization.
-   Pin package versions.

## Naming Conventions

-   camelCase: variables and methods.
-   PascalCase: classes.
-   Test files: `*.spec.ts`.
-   Test classes/suites should be descriptive.

## Project Structure

``` text
playwright-tests/
├── pages/
├── tests/
├── utils/
├── fixtures/
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── .env
```

## Test Rules

-   One feature area per test file.
-   Keep tests focused.
-   Use descriptive assertions.
-   Prefer one assertion concept per test.

## Best Practices

-   Tests should be independent.
-   Use POM to abstract UI interactions.
-   Keep configuration centralized.
-   Follow import order and TypeScript typing.
