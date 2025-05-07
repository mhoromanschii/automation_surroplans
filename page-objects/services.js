const { xpathSelector, cssSelector } = require('./_common.js');

//Services Page
module.exports = {
    url: function () {
        return this.api.launchUrl + this.__options.data.pageUrl;
    },
    commands: [{
        //Login function interaction of main page
        login: function () {
            const services = this.api.page.services()
            this.api
                .url(this.api.launchUrl)
                .maximizeWindow()
                .pause(this.api.globals.testData.PAUSE_TIME)
            services
                .waitForElementVisible('@mainServicesTitle')
                .assert.urlContains(services.__options.data.launch_url + services.__options.data.pageUrl)
                return this;
        },

        //Language switcher function
        languageSwitcher: function (chooseLang, proveLang) {
            this
                .waitForElementVisible('@langSwitcherBtn')
                .click('@langSwitcherBtn')
                .waitForElementVisible('@langBodyContainer')
                .assert.elementPresent('@FranBtn')
                .assert.elementPresent('@EngBtn')
                .assert.elementPresent('@ItalBtn')
                .assert.elementPresent('@EspBtn')
                .assert.elementPresent('@DeuBtn')
                .moveToElement(chooseLang, 0, 0)
                .click(chooseLang)
                .pause(1000)
                .waitForElementVisible(proveLang)
                .assert.elementPresent(proveLang)
                .pause(1000)
                return this;
                
        },

        //Prove we landed on services page successfully
        verifyServicesPage: function () {
            this
                .waitForElementVisible('@mainServicesTitle')
                .assert.elementPresent('@servicesCardForms')
            this.api.pause(this.api.globals.testData.PAUSE_TIME);
            return this;
        },

        //Choose what service to interact
        chooseService: function (chooseCard, requestProposal) {
            const services = this.api.page.services()
            this
                .waitForElementVisible('@servicesCardForms')
                .waitForElementVisible(chooseCard)
                // .pause(500)
                .moveToElement(chooseCard, 0, 0)
                .pause(500)
                .waitForElementVisible(requestProposal)
                .click(requestProposal)
                .pause(1000)
                return this;

        },


    }],
    elements: {
        //*************************//
        //***** Services page *****//
        //*************************//

        //Language drop-down
        langSwitcherBtn: xpathSelector("//*[contains(@class, 'multi-lang-switcher') and button[@id='dropdown-basic']]"),
        langBodyContainer: xpathSelector("//*[contains(@class, 'multi-lang-switcher_lang-menu-wrapper dropdown-menu show')]"),
        EngBtn: xpathSelector("//*[contains(@class, 'multi-lang-switcher')]//span[contains(text(), 'English')]"),
        FranBtn: xpathSelector("//*[contains(@class, 'multi-lang-switcher')]//span[contains(text(), 'Français')]"),
        ItalBtn: xpathSelector("//*[contains(@class, 'multi-lang-switcher')]//span[contains(text(), 'Italiano')]"),
        EspBtn: xpathSelector("//*[contains(@class, 'multi-lang-switcher')]//span[contains(text(), 'Español')]"),
        DeuBtn: xpathSelector("//*[contains(@class, 'multi-lang-switcher')]//span[contains(text(), 'Deutsch')]"),

        //Language chosen item
        proveLangEng: xpathSelector("//*[contains(@id, 'dropdown-basic') and img[@alt='en']]"),
        proveLangFran: xpathSelector("//*[contains(@id, 'dropdown-basic') and img[@alt='fr']]"),
        proveLangItal: xpathSelector("//*[contains(@id, 'dropdown-basic') and img[@alt='it]]"),
        proveLangEsp: xpathSelector("//*[contains(@id, 'dropdown-basic') and img[@alt='es]]"),
        proveLangDeu: xpathSelector("//*[contains(@id, 'dropdown-basic') and img[@alt='de]]"),

        //Section main services
        mainServicesTitle: xpathSelector("//*[contains(@class, 'services-page')]//h3[contains(text(), 'MAIN SERVICES')]"),
        servicesCardForms: xpathSelector("(//*[contains(@class, 'services-page_card-forms')])[1]"),
        medicalNegotiationsContainer: xpathSelector("(//*[contains(@class, 'services-info-card') and h4[@class='services-info-card_heading']])[9]"),
        requestProposalBtn: xpathSelector("(//div[contains(@class, 'call-to-action-button')]//*[contains(text(), 'Request Proposal')])[10]"),
        questionBanner: xpathSelector("//*[contains(@class, 'cta-banner_wrapper')]"),
        
        //Footer
        footer: xpathSelector("//footer[contains(@class, 'footer_wrapper')]"),

    },
    data: {

        launch_url: 'https://app-staging.surroplans.com',
        pageUrl: '/en/services',
        lang_en: '/en',
        lang_fr: '/fr',
        titleMain: 'MAIN SERVICES',
        titleCheckOut: 'SurroPlans can help',


    }
};
