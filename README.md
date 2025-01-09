# Playwright Automation(using Node.js)

## - Install node.js
## - Open cmd(windows)/terminal(mac) and run command 
    npm --version or npm -v 
    node --version or node -v
## - open vs code and make a project folder
## - Installation of Playwright
### - click view > terminal, and run this command 
    npm init playwright@latest
## - Commands for running test
    npx playwright test                               runs all tests on all browsers in headless mode
    npx playwright test --workers 3                   runs with 3 workers in parallel
    npx playwright test  one.spec.js                  runs a specific test file
    npx playwright test  one.spec.js  two.spec.js     runs the files specified
    npx playwright test  one  two                     runs files that have one or two in the file name
    npx playwright test -g "check title"              runs test with the title
    npx playwright test --project=chromium            runs on specific browser
    npx playwright test --headed                      runs tests in headed mode
    npx playwright test --debug                       debug tests
    npx playwright test example.spec.js --debug       debug specific test file
    npx playwright test example.spec.js:21 --debug    debug starting from specific line where test(..  starts
### - command to show report
    npx playwright show-report
###
    test.js 
test script will be used to create the test and the structure of the test
###
    expect.js
expect is used to run the assertions or add any checks

## - How to write tests
### - Step 1: Create a new file under test folder
### - Step 2: Add module 'playwright/test'
    const {test, expect} =  require('@playwright/test')
<b>require()</b> is a node.js built-in function used to load modules present in separate files. Here we are loading <b>test</b> and <b>expect</b> modules from playwright package
    
    import {test, expect} from '@playwright/test'
Another way to add the module
### Step 3: Create a test block - `test(title, testFunction)`
    test('My first test', () =>{
    //write code here
    })
#### create a browser test case
    test('My first test', async({page}) =>{
      await page.goto('https://google.com');
      await expect(page).toHaveTitle('Google');
    })

The keyword <b>async</b> before a function makes the function return a promise
<br>The keyword <b>await</b> before a function makes the function wait for a promise

<br>`Playwright comes with auto-wait built in`
<br>It waits for elements to be actionable prior to performing actions
<br>The default timeout is 5 sec and can be changed in config file
<br>
<br>`Playwright Test comes with builtin fixtures as below:`
<br>fixtures.browser
<br>fixtures.browserName
<br>fixtures.context
<br>fixtures.page
<br>fixtures.request
<br>You can add your own fixtures as well
<br>
<br>As shown below, Playwright Test will set up the page fixture before running the test, and tear it down after the test has finished
page fixture provides a Page object that is available to the test

    const { test, expect } = require('@playwright/test');
    test('basic test', async ({ page }) => {
    // ...
    });

## - How to record tests - Test generator
### - Playwright comes with a tool - `Codegen` also called Test generator
<br> Can be used to record test and generate test scripts
<br> It opens 2 windows
<br> 1. A browser window to interacts with the website
<br> 2. `Playwright Inspector` window to record test
<br>
<br> Step 1: Open terminal and run codegen - `npx playwright codegen`
<br> Demo site for record test - `saucedemo.com`
<br> Step 2: Select and click the username, password, login button etc and the test is in playwright inspector
<br> Step 3: Record all the test in the playwright inspector after that stop recording
<br> Step 4: Copy the record test, and make a new file inside the test folder in vs code and paste the recorded test
<br> Step 5: Run the test in headed mode and specify one browser for less time
    
    npx playwright test record1_demo.spec.js --project chromium --headed
`record1_demo.spec.js`: it is a file name where the recorded test is saved<br>
<br> We also add the url:

    npx playwright codegen google.com
<br> Record on a specific browser (default:chromium): `npx playwright codegen --browser firefox`<br>
<br> Record and save to a file:  `npx playwright codegen --target javascript -o record_example.js`
<br> `record_example.js`: is a file name where we can save the recorded test<br>
<br> Set viewport - screen resolution (size):  `npx playwright codegen --viewport-size=800,600`<br> 
<br> Emulate devices:  `npx playwright codegen --device="iPhone 11"`<br> 
<br> Emulate color scheme (if available): `npx playwright codegen --color-scheme=dark`<br> 
## - Trace Viewer
GUI tool that helps viweing the executed test along with snapshots, timeline and other details(traces)
### - How to use Trace Viewer
Step 1: Open config file and set `trace: 'on-first-retry'`
<br> It means collect trace when retrying the failed test for the 1st time only
<br> Step 2: Save and Run a test to fail
<br> Step 3 - Check <b>trace.zip</b> file created under test-results folder (after running the test)
<br> Step 4 - View trace - `npx playwright show-trace trace.zip` <b>or</b> Open Playwright test report > Click on Retry #1 > scroll down and click on trace image <b>or</b> Go to ` https://trace.playwright.dev/`
### - Trace Viewer Options
`on-first-retry`  - Record a trace only when retrying a test for the first time.
<br>`off` - Do not record a trace.
<br>`on` - Record a trace for each test. (not recommended as it's performance heavy)
<br>`retain-on-failure` - Record a trace for each test, but remove it from successful test runs
<br> To set trace on from command: `npx playwright test --trace on`

### - How to set Tracing programmatically
