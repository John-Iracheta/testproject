var expect = require('chai').expect
var LoginPage = require('../lib/loginPage.page')

browser.timeouts('implicit', 5000);

describe('Attempt to sign in with invalid creds then request pw reset', function() {
	it('sign in with invalid creds and trigger modal', function() {
		LoginPage.open();
		LoginPage.email.setValue('johni1028@gmail.com');
		LoginPage.password.setValue('wrongpassword');
		LoginPage.email.submitForm();
		browser.pause(1000);
		expect(LoginPage.invalidCredentialModal.getText()).to.contain("Oh No!");
		LoginPage.closeModal();
	});

	it('click reset password link', function() {
		LoginPage.resetPassword();
		browser.pause(1000);
		LoginPage.requestReset();
		browser.pause(1000);

		expect(LoginPage.resetPasswordConfirmation.getText()).to.contain("Alright!");
		LoginPage.closeModal();
		browser.pause(3000);
	});

});