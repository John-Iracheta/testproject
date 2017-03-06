"use strict"

var Page = require('./page')

class LoginPage extends Page {
	
	get email() { return browser.element('#email'); }
	get password() { return browser.element('#password'); }

	get invalidCredentialModal() { return browser.element('h1=Oh No!'); }

	get resetPasswordConfirmation() { return browser.element('h1=Alright!'); }

	open() {
		super.open('user/signin?app=re');
	}

	resetPassword() {
		browser.element('=Reset Password').click();
	}

	requestReset() {
		browser.element('//button[contains(.,"Request Reset")]').click();
	}

	resumeCourse() {
		browser.element('=ResumeCourse');
	}

}

module.exports = new LoginPage();