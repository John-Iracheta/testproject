# testproject

**Summary:** This repo contains a project which automates a portion of Aceable's online education platform. These tests cover account creation, course purchase, and profile completion. This project is written in JavaScript using the [WebdriverIO test framework](http://webdriver.io/). 

**Prerequisites:** At a minimum, you must have Node 6.0 and Java 8u121 installed. 
***
### Getting Started
  The following steps will set up the project and run a test.
+ Clone this repo
+ cd into the testproject directory
+ run `npm install`
+ run `./node_modules/.bin/wdio wdio.local.conf.js`
+ Bonus: If you'd like to configure WebdriverIO for your needs, run `./node_modules/.bin/wdio config` to run a guided configuration script. This will create a `wdio.conf.js` file with only the modules and services you specify.

### Running Tests
  To change which test you'd like to run, open the `wdio.local.conf.js` file. The `specs` key is where you may specify which test you'd like to run. The tests are located in the `~/testproject/tests` directory. After you change which test you'd like to run, save `wdio.local.conf.js` and run `./node_modules/.bin/wdio wdio.local.conf.js`.
  
### Test Results
  By default, test results will be displayed in the terminal. You'll see green dots for tests which are passing and red 'F's for failing tests. You will also see the stack trace for failed tests.
  The `wdio.conf.js` file is configured to use the allure reporting tool. Allure provides a pretty front end for viewing test results. To view allure results, run a test, then run the following command from the testproject root `allure generate reports/ && allure report open`.
  
### Test Format
  Tests are written in the mocha BDD format which utilize `describe` and `it` keywords when defining a test. Chai is also used for adding assertions to tests.
  
### Pageobject Pattern
  These tests utilize the pageobject patton. This pattern defines elements and functions which perform actions in a pageobject file separate from the test file. This keeps the test requirements and automation logic separate from each other which is good in cases where a web front end changes slightly, but the general requirements of the test are unchanged.
  
  The pageobject files can be found in the `lib` directory. In those files, page elements are defined as _getter_ functions. Other necessary pageobject functions are definied in these files as well. Test files perform actions on page elements while invoking pageobject functions. Pageobject files all inherit from a parent object `page.js`.
  
