"use strict"

var Page = require('./page')

class LoginPage extends Page {
	
	get email() { return browser.element('#email'); }
	get password() { return browser.element('#password'); }

	get createAccount() { return browser.element('=Create Account'); }
	get resetPassword() { return browser.element('=Reset Password'); }

	get invalidCredentialModal() { return browser.element('#ngdialog1-aria-describedby'); }

	get firstName() { return browser.element('#firstName'); }
	get courseDDL() { return browser.element('//select'); }

	get creditCardNumber() { return browser.element("[name='number']"); }
	get creditCardExpiration() { return browser.element("[name='expiry']"); }
	get creditCardCVC() { return browser.element("[name='cvc']"); }
	get termsAndConditions() { return browser.element("[name='tandc']"); }
	get coursePurchasedModal() { return browser.element('h1=Course Purchased!'); }

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


	open() {
		super.open('user/signin?app=re');
	}

	createNewAccount() {
		this.createAccount.click();
	}

	resetUserPassword() {
		this.resetPassword.click();
	}

	closeInvalidCredentialModal() {
		browser.element('//button[contains(.,"Continue")]').click();
	}

	selectCourse(courseName) {
		this.courseDDL.selectByVisibleText(courseName);
	}

	selectGender(gender) {
		this.gender.selectByVisibleText(gender);
	}

	closeCoursePurchasedModal() {
		browser.element('//button[contains(.,"Continue")]').click();
	}

	finalizeProfile() {
		browser.element('//button[contains(.,"Finish Setup")]').click();
	}

}

module.exports = new LoginPage();