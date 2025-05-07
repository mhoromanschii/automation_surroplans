/*
Core Test Suite configuration
Selenium settings, default output and test timeout settings
*/

// const path = require('path');
// require('babel-core/register');//required to make import/export work in the test files.
const SCREENSHOT_PATH = "./reports";

let FILECOUNT = 0; // "global" screenshot file count

const testData = require('./testData.js');
// const testData_prod = require('./testData.dev.js');

const nightwatch_config = {
    "src_folders": [
        'test_cases'
        // 'test-cases/login/success-login/successLogin.js',
        
    ],
    "output_folder": "./reports",
    "globals_path": "globals.js",
    "page_objects_path": "./page-objects",
    // "custom_commands_path": ["./helpers", './node_modules/nightwatch-vrt/commands'],
    // "custom_assertions_path": ['./node_modules/nightwatch-vrt/assertions'],
    "test_settings": {
        //DEFAULT SETTINGS
        "default": {
            "use_xpath": true,
            "screenshots": {
                "enabled": true,
                "path": SCREENSHOT_PATH,
                "on_failure": true
            },
            "launch_url": "https://app-staging.surroplans.com/en/services", //default to QA environment
            "globals": {
                "waitForConditionTimeout": 20000,
                "abortOnAssertionFailure": true,
                "testData": testData,
                "visual_regression_settings": {
                    "generate_screenshot_path": generateScreenshotFilePath,
                    "latest_screenshots_path": "./vrt/latest",
                    "latest_suffix": "",
                    "baseline_screenshots_path": "./vrt/baseline",
                    "baseline_suffix": "",
                    "diff_screenshots_path": "./vrt/diff",
                    "diff_suffix": "",
                    "threshold": 0.01,
                    "prompt": false,
                    "always_save_diff_screenshot": false
                }
            }
        },
        //ENVIRONMENTS - these will be combinations of server to test and browser to test with (right now chrome is default)
        "local": {
            "launch_url": "http://localhost",
            "selenium_port"  : 4444,
            "selenium_host"  : "localhost",
            "globals": {
                "waitForConditionTimeout": 15000
            }
        },

        // Dev
        "dev": {
            "launch_url": "yourLinkHere",
            "globals": {
                "waitForConditionTimeout": 20000,
                "abortOnAssertionFailure":true,
                "testData": testData
            }
        },
        // Prod
        // "prod": {
        //     "launch_url": "url",
        //     "globals": {
        //         "waitForConditionTimeout": 20000,
        //         "abortOnAssertionFailure":true,
        //         "testData": testData_prod
        //     }
        // },
    }
};

var chosenBrowser = process.env.BROWSER || "chrome";
//Add in selected browser configuration
var browser_config = require(`./config/${chosenBrowser}`);

//Add selenium section from browser_config object
nightwatch_config.selenium = browser_config.selenium;

//copy selenium host and port into each test_settings section
//copy desiredCapabilities object from browser_config into each test_settings section
//save chosenBrowser into globals
for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    //copy selenium settings to test_settings
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    //copy browser specific config to test_settings
    config['desiredCapabilities'] = browser_config.test_settings.default.desiredCapabilities;
    //username and access_key are only used for lambdatest - so default to blank if those settings are not provided
    config['username'] = browser_config.test_settings.default.username || "";
    config['access_key'] = browser_config.test_settings.default.access_key || "";
    config['globals']['chosenBrowser'] = chosenBrowser;
}


module.exports = nightwatch_config;

/* a very vital function with a funny story behind it */
function padLeft (count) {  return count < 10 ? '0' + count : count.toString(); }

/* this function will path screenshots out of the default path, project root */
function imgpath (browser) {
    var a = browser.options.desiredCapabilities;
    var meta = [a.platform];
    meta.push(a.browserName ? a.browserName : 'any');
    meta.push(a.version ? a.version : 'any');
    meta.push(a.name); // this is the test filename so always exists.
    var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
    return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

function generateScreenshotFilePath(nightwatchClient, basePath, fileName) {
    const moduleName = nightwatchClient.currentTest.module;

    return path.join(process.cwd(), basePath, moduleName, fileName);
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;