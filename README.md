# AI Chat Automation

Playwright and Cucumber (BDD) automated tests for authentication, chat, AI quality, and accessibility. This repository tests a separately hosted application; it does not contain an application server to launch.

## Folder Structure

Below is an overview of the key directories in this project:

```text
├── config/             # Configuration files and environment settings (e.g., qa.config.ts)
├── docs/               # Technical documentation and execution guides
├── features/           # Gherkin feature files organized by domain
│   ├── accessibility/  # Accessibility-related BDD scenarios
│   ├── authentication/ # Login and SSO test features
│   ├── chat/           # Chat interaction and response validation
│   └── negative/       # Negative test cases and boundary conditions
├── hooks/              # Cucumber hooks and custom context (e.g., cucumber-world.ts)
├── scripts/            # Utility scripts for setup and parity validation
├── src/                # Core architecture and Page Object Models (POM)
│   ├── core/           # Utility helpers and API clients
│   └── pages/          # Page Object classes (e.g., LoginPage.ts)
├── steps/              # BDD step definition bindings (`createBdd`)
├── tests/              # Native Playwright spec tests
├── .env.example        # Environment variable template
└── playwright.config.ts# Playwright-BDD test runner configuration
```

## Clone and set up

1. Install Node.js **20+**, and Git. Open the cloned repository root in VS Code.
2. Accept the recommended extensions: **Playwright Test** and **Cucumber**.
3. Select **Terminal → Run Task → Setup: project**. This runs `npm ci` and creates `.env` from `.env.example` only if it does not already exist.
4. For live tests, fill in `BASE_URL`, `SSO_USERNAME`, and `SSO_PASSWORD` in your local `.env`, then run **Setup: install Chromium**. On Linux, installing browser OS dependencies may request elevated permissions.

The equivalent terminal setup is:

```sh
npm ci
node scripts/init-env.mjs
# Required only for live browser tests:
npx playwright install --with-deps chromium
```

Do not commit `.env` or generated reports; they are ignored by Git.

## Run and debug in VS Code

Open **Run and Debug**, select a launch configuration, and press **F5**. Set breakpoints in `.ts` files before starting. Configurations use workspace-relative paths and the installed local dependencies.

| Launch configuration | Purpose |
| --- | --- |
| Check: Cucumber dry-run | Validate step bindings without running browsers or steps |
| Check: Playwright discovery | List Chromium tests without executing them |
| Check: AI evaluator unit tests | Debug synthetic-text evaluator and report tests; no application access |
| Live: Debug current Playwright spec | Open a `.spec.ts` file, then launch its Chromium tests |
| Live: Debug Playwright by tag or title | Enter a tag such as `@chatMemory` or a title regex |
| Live: Debug current Cucumber feature | Open a `.feature` file, then launch its scenarios |
| Live: Debug Cucumber by tag | Enter a tag expression such as `@chatMemory or @chatGrounding` |

**Live configurations open browsers and access the configured application.** They are never started automatically by opening the workspace. The check configurations use placeholders where needed and do not require real credentials.

Playwright live debugging uses a single worker, no retries, and `PWDEBUG=1` to enable its Inspector. The Node debugger attaches to child workers. The current-spec launch filters by filename; keep spec filenames unique or use the Playwright extension to select a specific test.

Cucumber live debugging runs in the main process (`--parallel 0`), so breakpoints in step definitions and page objects are reachable. Existing step time limits still apply; resume promptly during long step pauses. Do not select a step `.ts` file for the current-feature launch; use the tag configuration when editing steps.

Use **Terminal → Run Task → Check: all static checks** to run TypeScript, scenario parity, and Cucumber dry-run validation. No setup task runs live tests.

See [running-tests.md](docs/running-tests.md) for the scenario mapping, CLI commands, and AI-quality report locations.

Debugging references: [VS Code Node.js debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) and [Playwright debugging](https://playwright.dev/docs/debug).