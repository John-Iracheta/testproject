"use strict"

var Page = require('./page')

class LoginPage extends Page {
	
	get username() { return browser.element('#email'); }
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

}

module.exports = new LoginPage();