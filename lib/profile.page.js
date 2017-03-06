/**
    This pageobject defines elements and functions needed for the user profile page.
*/
"use strict"

var Page = require('./page')

class Profile extends Page {
	//basic information
	get username() { return browser.element('#username'); }
	get phone() { return browser.element('#phone'); }
	get middleInitial() { return browser.element('#middleInitial'); }
	get lastName() { return browser.element('#lastName'); }
	get gender() { return browser.element('[name="gender"]'); }
	get birthDate() { return browser.element('#birthDate'); }
	//legal address
	get addressStreet() { return browser.element('#addressStreet'); }
	get addressApt() { return browser.element('#addressApt'); }
	get addressCity() { return browser.element('#addressCity'); }
	get addressState() { return browser.element('#addressState'); }
	get addressPostal() { return browser.element('#addressPostal'); }
	//additional information
	get licenseKey() { return browser.element('#licenseKey'); }
	get licenseExpireDate() { return browser.element('#licenseExpireDate'); }
	get verificationCheckbox() { return browser.element('#isAltEmailVerified'); }
	//this is located on the contract page
	get fullName() { return browser.element('#fullName'); }
	//selects gender from drop down list
	selectGender(gender) {
		this.gender.selectByVisibleText(gender);
	}
	//this is for the profile submission confirmation screen which appears after submitting profile and before signing contract
	finalizeProfile() {
		browser.element('//button[contains(.,"Finish Setup")]').click();
	}
	//submits the contract agreement page
	submitContractAgreement() {
		browser.element('//button[contains(.,"Sign Agreement")]').click();
	}
}

module.exports = new Profile();