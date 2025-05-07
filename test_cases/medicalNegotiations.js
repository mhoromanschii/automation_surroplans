const testID = 'INT-TZ001'

module.exports = {
    '@tags' : [testID, 'medical_negotiation'],

    'Go to main page of web, and prove if you can switch language and fill form information': function (browser) {

        //verify url we landed on our web-page of services.
        //switching language between En to Fr, and back.
        //Choose service and assert medical negotiation container and move down to press proposal btn.
        //Check url if we on correct page. Fill medical billing form data with all required fields and hit next btn.
        //Check url if we on correct page. Continue on next step two page and fill radio
        //Prove we see (Thank you!) assertion text and check we are on url of step 3 page. And btn services visible.

        const services = browser.page.services();
        const medicalBilling = browser.page.medicalNegotiations();
  
        //Data Container of language drop-down switch
        const chooseLangFran = services.__options.elements.FranBtn;
        const proveLangFran = services.__options.elements.proveLangFran;
        const chooseLangEng = services.__options.elements.EngBtn;
        const proveLangEng = services.__options.elements.proveLangEng;

        //Data for choose Medical Negotiations Container
        const medicalNegotiations = services.__options.elements.medicalNegotiationsContainer;
        const proposalBtn = services.__options.elements.requestProposalBtn;

        //Data for medical billing form step one
        const firstName = browser.globals.testData.BASIC_INFO.USERNAME;
        const surName = browser.globals.testData.BASIC_INFO.SURNAME;
        const eMail = browser.globals.testData.BASIC_INFO.EMAIL;
        const phoneNum = browser.globals.testData.BASIC_INFO.PHONE;
        const chooseCitizen = medicalBilling.__options.elements.chooseCitizenAlbania;
        const whatsAppRadio = medicalBilling.__options.elements.noWhatsAppRadio;
        const clientRadio = medicalBilling.__options.elements.yesClientRadio;
        const referralName = browser.globals.testData.BASIC_INFO.USER_REFERRAL;

        //Data for medical billing form step one
        const specificDeadlineRadio = medicalBilling.__options.elements.noSpecificDeadlineRadio;
        const additionalInfoRadio = medicalBilling.__options.elements.noAdditionalInfoRadio;



        //Test body
        services
            .login()
            .languageSwitcher(chooseLangFran, proveLangFran)
            .languageSwitcher(chooseLangEng, proveLangEng)
            .verifyServicesPage()

            .chooseService(medicalNegotiations, proposalBtn);
        browser
            .assert.urlContains(services.__options.data.launch_url + medicalBilling.__options.data.medicalBillingStepOneUrl)
        medicalBilling
            .medicalBillingFormOne({
                firstName, surName, eMail, phoneNum, chooseCitizen, whatsAppRadio, clientRadio,referralName
            })
        browser
            .assert.urlContains(services.__options.data.launch_url + medicalBilling.__options.data.medicalBillingStepTwoUrl)
        medicalBilling
            .medicalBillingFormTwo(specificDeadlineRadio, additionalInfoRadio)
        browser
            .assert.urlContains(services.__options.data.launch_url + medicalBilling.__options.data.medicalBillingStepThreeUrl)
            
        browser.end();
    }
}