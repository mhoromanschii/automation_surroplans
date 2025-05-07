//This is the default browser_config - which are the values for chrome

const extension = process.platform === "win32" ? '.exe' : ''; // if os is windows we need to include .exe in filepaths

var browser_config = {
    "selenium": {
        "start_process": true,
        "server_path": "./bin/selenium.jar",
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": {
            "webdriver.chrome.driver" : "./bin/chromedriver" + extension
        }
    },
    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        }
    }
}
module.exports = browser_config;