const { xpathSelector, cssSelector } = require('./_common.js');

//Menu overlay
module.exports = {
    url: function() {
        return this.api.launchUrl;
    },

    commands: [{

        medicalBillingFormOne: function({
            firstName, surName, eMail, phoneNum, chooseCitizen, whatsAppRadio, clientRadio, referralName
        }) {
            this
                .waitForElementVisible('@firstName')
                .assert.elementPresent('@firstName')
                .assert.elementPresent('@surName')
                .assert.elementPresent('@email')
                .assert.elementPresent('@countryDropDown')
                .assert.elementPresent('@citizenshipDropDown')
                .assert.elementPresent('@phoneNumberInput')
    
                .setValue("@firstName", firstName)
                .setValue("@surName", surName)
                .setValue("@email", eMail)
                .setValue("@phoneNumberInput", phoneNum)
                .pause(500)
                .click("@citizenshipDropDown")
                .click(chooseCitizen)
                .pause(1000)
                .waitForElementVisible('@noWhatsAppRadio')
                .pause(500)
                .click(whatsAppRadio)
                .pause(500)
                .click(clientRadio)

                .moveToElement("@nextButton", 0, 0)
                .pause(500)

                .assert.elementPresent('@referralName')
                .setValue("@referralName", referralName)

                .waitForElementVisible('@checkBoxConfirm')
                .assert.elementPresent('@checkBoxConfirm')
                .click('@checkBoxConfirm')

                .waitForElementVisible('@nextButton')
                .assert.elementPresent('@nextButton')
                .click('@nextButton')
                .pause(1500)
                
    
                return this
        },

        medicalBillingFormTwo: function(specificDeadlineRadio, additionalInfoRadio) {
            this
                .waitForElementVisible('@pageTitleBackgroundInfo')
                .assert.elementPresent('@pageTitleBackgroundInfo')
                .click(specificDeadlineRadio)
                .pause(500)
                .click(additionalInfoRadio)
                .waitForElementVisible('@nextButton')
                .assert.elementPresent('@nextButton')
                .click('@nextButton')
                .pause(1500)
                .waitForElementVisible('@pageTitleConfirmationInfo')
                .assert.elementPresent('@pageTitleConfirmationInfo')
                .assert.elementPresent('@buttonSurroPlansServices')
                return this
        },

    }],
    elements: {
        //***********************************************************//
        //****** Medical billing - Basic Information page STEP 1 ****//
        //***********************************************************//

        firstName: xpathSelector("(//*[contains(@class, 'form-labeled-input_wrapper')]//input)[1]"),
        surName: xpathSelector("(//*[contains(@class, 'form-labeled-input_wrapper')]//input)[2]"),
        email: xpathSelector("(//*[contains(@class, 'form-labeled-input_wrapper')]//input)[3]"),

        //Drop-down's
        countryDropDown: xpathSelector("//*[contains(@class, 'dropdown_basic')]//div[contains(text(), 'United States')]"),
        citizenshipDropDown: xpathSelector("(//*[contains(@class, 'dropdown_basic')])[2]"),
        chooseCitizenAlbania: xpathSelector("//*[contains(@id, 'react-select-4-option-2') and contains(text(), 'Albania')]"),

        //Phone input
        phoneNumberInput: xpathSelector("//*[contains(@class, 'phone-number')]//*[@placeholder='E.g. 123456789']"),

        //Do you have WhatsApp on this number? radio
        yesWhatsAppRadio: xpathSelector("(//*[contains(@class, 'MuiFormControlLabel-root')]//span[contains(text(), 'Yes')])[1]"),
        noWhatsAppRadio: xpathSelector("(//*[contains(@class, 'MuiFormControlLabel-root')]//span[contains(text(), 'No')])[1]"),

        //Are you a current or previous client of SurroPlans?
        yesClientRadio: xpathSelector("(//*[contains(@class, 'MuiFormControlLabel-root')]//span[contains(text(), 'Yes')])[2]"),
        noClientRadio: xpathSelector("(//*[contains(@class, 'MuiFormControlLabel-root')]//span[contains(text(), 'No')])[2]"),

        //Referral input and confirm checkBox
        referralName: xpathSelector("(//*[contains(@class, 'form-labeled-input_wrapper')]//input)[5]"),
        checkBoxConfirm: xpathSelector("//*[contains(@class, 'MuiFormControlLabel-root')]//span[contains(text(), 'Please check this box')]"),
        
        //Next button
        nextButton: xpathSelector("//*[contains(@class, 'call-to-action-button')]//span[contains(text(), 'Next')] "),
        
        //***********************************************************//
        //****** Medical billing - Background Info page STEP 2 ******//
        //***********************************************************//
        
        pageTitleBackgroundInfo: xpathSelector("//*[contains(@class, 'header_titleFirst')]//span[contains(text(), 'Background Info')]"),

        //Do you have any specific deadlines? radio
        yesSpecificDeadlineRadio: xpathSelector("(//*[contains(@class, 'MuiFormControlLabel-root')]//span[contains(text(), 'Yes')])[1]"),
        noSpecificDeadlineRadio: xpathSelector("(//*[contains(@class, 'MuiFormControlLabel-root')]//span[contains(text(), 'No')])[1]"),
      
        //Do you have any additional information?
        yesAdditionalInfoRadio: xpathSelector("(//*[contains(@class, 'MuiFormControlLabel-root')]//span[contains(text(), 'Yes')])[2]"),
        noAdditionalInfoRadio: xpathSelector("(//*[contains(@class, 'MuiFormControlLabel-root')]//span[contains(text(), 'No')])[2]"),  

        //***********************************************************//
        //******* Medical billing - Confirmation Page STEP 3 ********//
        //***********************************************************//
        
        pageTitleConfirmationInfo: xpathSelector("//*[contains(@class, 'header_titleFirst')]//span[contains(text(), 'Thank you!')]"),
        buttonSurroPlansServices: xpathSelector("//*[contains(@class, 'confirmation-page_cta-transparent')]//span[contains(text(), 'SurroPlans Services')]"),



    },
    data: {
        medicalBillingStepOneUrl: '/en/medical-billing/basic-information-stp1',
        medicalBillingStepTwoUrl: '/en/medical-billing/background-info-stp2',
        medicalBillingStepThreeUrl: '/en/medical-billing/confirmation-stp3',

    }
};