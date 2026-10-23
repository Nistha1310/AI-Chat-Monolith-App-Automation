# AI Chat Automation

Playwright and Cucumber (BDD) automated test framework for authentication, chat, AI quality, and accessibility testing. This repository tests a separately hosted application; it does not contain an application server to launch.

## Repository Architecture

```text
.
├── .vscode/             # VS Code workspace settings, launch configs, tasks & extension recommendations
│   ├── extensions.json  # Recommended workspace extensions
│   ├── launch.json      # Debugger launch configurations for Playwright and Cucumber
│   ├── settings.json    # Workspace formatting & TypeScript IntelliSense rules
│   └── tasks.json       # Task runner configurations for static checks and setup
├── config/              # Centralized configuration management
│   ├── ConfigManager.ts # Environment and configuration getter module
│   └── qa.config.ts     # Default environment constants and timeouts
├── docs/                # Technical documentation and execution guides
├── features/            # Gherkin feature files organized by domain
│   ├── accessibility/   # Accessibility-related BDD scenarios
│   ├── authentication/  # SSO and login test features
│   ├── chat/            # Chat functionality & prompt interaction scenarios
│   └── negative/        # Negative test cases and boundary conditions
├── hooks/               # Cucumber world context and browser lifecycle hooks
│   ├── cucumber-world.ts# Custom World interface definition
│   └── hooks.ts         # Before/After setup and cleanup hooks
├── scripts/             # Workspace utility automation scripts
│   ├── check-scenario-parity.mjs # Validates parity between feature files and step definitions
│   └── init-env.mjs     # Environment file initializer (.env creation)
├── src/                 # Framework core and Page Object Model (POM) layer
│   ├── core/            # Core utilities, helpers, and API clients
│   └── pages/           # Page Objects (e.g., LoginPage.ts)
├── steps/               # Cucumber step definition bindings using `playwright-bdd`
├── tests/               # Native Playwright spec tests and unit evaluators
├── .env.example         # Environment variables template
└── playwright.config.ts # Playwright-BDD configuration file
```

---

## Clone and Set Up

1. **Prerequisites**: Install Node.js **20+** and Git. Open the repository root in VS Code.
2. **Extensions**: Accept the workspace recommended extensions when prompted (**Playwright Test** and **Cucumber**).
3. **Automated Setup**:
   Select **Terminal → Run Task → Setup: project**. This command runs `npm ci` and initializes your `.env` file via `scripts/init-env.mjs`.
4. **Environment Variables**:
   Update your local `.env` file with appropriate values for your target environment:
   ```env
   BASE_URL=https://your-app-url.com
   SSO_USERNAME=your-email@company.com
   SSO_PASSWORD=your-secure-password
   ```
5. **Install Browser Dependencies**:
   Run **Terminal → Run Task → Setup: install Chromium** to download Playwright browsers.

### Command Line Equivalent

```bash
npm ci
node scripts/init-env.mjs
npx playwright install --with-deps chromium
```

> **Note:** Do not commit `.env` or generated test report artifacts. They are excluded via `.gitignore`.

---

## Running and Debugging in VS Code

Open the **Run and Debug** view in VS Code (`Ctrl+Shift+D` / `Cmd+Shift+D`), pick a launch configuration from the dropdown, and press **F5**.

| Launch Configuration | Description |
| :--- | :--- |
| **Check: Cucumber dry-run** | Validates Gherkin step bindings without launching browsers |
| **Check: Playwright discovery** | Lists Chromium test suites without executing tests |
| **Check: AI evaluator unit tests** | Runs synthetic unit tests locally without application access |
| **Live: Debug current Playwright spec** | Debugs an open `.spec.ts` file in Chromium using `PWDEBUG=1` |
| **Live: Debug Playwright by tag or title** | Filters test execution by tag or title expression |
| **Live: Debug current Cucumber feature** | Launches and debugs scenarios in an active `.feature` file |
| **Live: Debug Cucumber by tag** | Runs Cucumber feature scenarios matching specified tag expressions |

---

## Static Quality Checks

You can run static validation tasks across the workspace before committing code:

* Run **Terminal → Run Task → Check: scenario parity** to verify step definition coverage against `.feature` files.
* Run **Terminal → Run Task → Check: all static checks** to execute TypeScript type checking (`tsc --noEmit`), scenario parity verification, and dry-run validation concurrently.

---

## Command Line Execution

```bash
# Generate BDD test specs from Gherkin feature files
npx bddgen

# Execute all Playwright BDD tests
npx playwright test

# Open interactive Playwright HTML report
npx playwright show-report
```

For detailed scenario mappings and CLI flags, refer to [docs/running-tests.md](docs/running-tests.md).