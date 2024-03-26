# QA Task (SDET 2024 - Technical Task)

https://dl.circleci.com/status-badge/img/gh/bassel331/Testing_Task/tree/main.svg?style=svg


This repository contains two main parts: API testing and UI testing. The API testing is conducted using mock-user-auth npm , supertest npm , mocha and chai for assertions , while the UI testing is performed using Nightwatch.js.

***API Testing:***

The project encompasses API testing capabilities, particularly emphasizing the simulation of user authentication procedures. This facilitates comprehensive testing of various authentication scenarios.

****Setup:****
1-Clone this repository to your local machine.

2-Navigate to the APITest directory.

3-Install dependencies using npm:$ npm install

4-run the mock-user-auth using : $ npm run dev

5-run the supertest using : $ mocha server.test.js

*****NOTE:***** if error "cannot be loaded because running scripts is disabled on this system" appears you should run this command between step 4 and 5 $ Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass


***UI Testing:***

In our project, we've implemented tests specifically targeting the functionality of the Contact Us page and the Search Results feature. These tests aim to ensure that these components of the application perform as expected and meet the required specifications.

****Setup:****
1-Clone this repository to your local machine.

2-Navigate to the UITest directory.

3-Install dependencies using npm:$ npm install

4-run the contact us page tests using : $ node nightwatch -e chrome -a myStore

5-run the dress search tests using : $ node nightwatch -e chrome -a dressSearch

****Deliverables:****

1-API Tests(including html-report)

2-UI Tests(including html-report)

3-APIBugsReport

4-UIBugsReport

5-UITestCases



