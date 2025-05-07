module.exports = {

    // This will be run before each test suite
    beforeEach: function(browser, done) {
        browser.maximizeWindow();
        done();
    },
    // This will be run after each test suite is finished
    afterEach: async function(browser, done) {   
        //Determine Result
        browser.end(function(result) {
            done();
        });
    },


};
