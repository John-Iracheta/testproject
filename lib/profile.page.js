"use strict"

var Page = require('./page')

class Profile extends Page {
	
	get username() { return browser.element('#username'); }
	get phone() { return browser.element('#phone'); }
	get middleInitial() { return browser.element('#middleInitial'); }
	get lastName() { return browser.element('#lastName'); }
	get gender() { return browser.element('[name="gender"]'); }
	get birthDate() { return browser.element('#birthDate'); }

	get addressStreet() { return browser.element('#addressStreet'); }
	get addressApt() { return browser.element('#addressApt'); }
	get addressCity() { return browser.element('#addressCity'); }
	get addressState() { return browser.element('#addressState'); }
	get addressPostal() { return browser.element('#addressPostal'); }

	get licenseKey() { return browser.element('#licenseKey'); }
	get licenseExpireDate() { return browser.element('#licenseExpireDate'); }
	get verificationCheckbox() { return browser.element('#isAltEmailVerified'); }

	get fullName() { return browser.element('#fullName'); }

	selectGender(gender) {
		this.gender.selectByVisibleText(gender);
	}

	finalizeProfile() {
		browser.element('//button[contains(.,"Finish Setup")]').click();
	}

	submitContractAgreement() {
		browser.element('//button[contains(.,"Sign Agreement")]').click();
	}
}

module.exports = new Profile();