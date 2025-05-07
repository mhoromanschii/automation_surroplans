//Chrome config is identical to default
var default_config = require('./default');
var browser_config = default_config;

// Added to support testing against Integrations
browser_config["test_settings"]["default"]["desiredCapabilities"]["chromeOptions"] = {
    "args": ['--allow-running-insecure-content', '--ignore-certificate-errors'], "w3c": false
};

module.exports = browser_config;