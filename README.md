# Playwright Automation(using node.js)

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
