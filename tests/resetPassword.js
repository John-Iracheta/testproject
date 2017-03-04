var expect = require('chai').expect
var LoginPage = require('../lib/loginPage.page.js')

browser.timeouts('implicit', 5000);

describe('Attempt to sign in with invalid creds then request pw reset', function() {
	it('sign in with invalid creds and trigger modal', function() {
		LoginPage.open();
		LoginPage.username.setValue('johni1028@gmail.com');
		LoginPage.password.setValue('wrongpassword');
		LoginPage.username.submitForm();

		expect(LoginPage.invalidCredentialModal.getText()).to.contain("Oops! We don't recognize that email and password.");
	});

	it('close modal', function() {
		LoginPage.closeInvalidCredentialModal();
	});

	it('click reset password link', function() {
		LoginPage.resetUserPassword();
	});

});