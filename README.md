# automation_surroplans

This project involves developing an automated UI testing suite using Nightwatch.js for a React-based web application.
The goal is to ensure reliable end-to-end testing of dynamic form interactions, including scrolling to elements, interacting with complex nested components (radio buttons, checkboxes, and text inputs), and handling page-level behaviors such as asynchronous rendering and visibility issues.
Special attention is given to precise element targeting using optimized XPath selectors and simulating user actions


# FIRST TIME STEPS to Setup Nightwatch
```
- Pull reposirory
 
 git clone https://github.com/mhoromanschii/automation_surroplans.git

 In an existing project: cd <automation_surroplans> 
 
 npm install
 
 npm install -g npm-check-updates
 
 npm install nightwatch --save
 
 npm audit fix --force
 


 ```
 
#### Running tests

These tests will run using the chrome browser by default

To run the test, use the usual npx nightwatch command like below:

cd /path/to/project/directory

command to run test suite:

npx nightwatch


