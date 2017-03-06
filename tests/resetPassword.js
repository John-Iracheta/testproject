/**
    scenario: user enters incorrect password and requests to reset.
*/
var expect = require('chai').expect
var LoginPage = require('../lib/loginPage.page')

browser.timeouts('implicit', 5000);

describe('Attempt to sign in with invalid creds then request pw reset', function() {
	//enter incorrect password
	it('sign in with invalid creds and trigger modal', function() {
		LoginPage.open();
		LoginPage.email.setValue('johni1028@gmail.com');
		LoginPage.password.setValue('wrongpassword');
		LoginPage.email.submitForm();
		browser.pause(1000);
		expect(LoginPage.invalidCredentialModal.getText()).to.contain("Oh No!");    //verify modal appears indicating incorrect credentials
		LoginPage.closeModal();
	});
	//click the reset password link on sign in page
	it('click reset password link', function() {
		LoginPage.resetPassword();
		browser.pause(1000);
		LoginPage.requestReset();    //click request reset button on reset password page
		browser.pause(1000);

		expect(LoginPage.resetPasswordConfirmation.getText()).to.contain("Alright!");    //verify modal appears indicating successful reset request
		LoginPage.closeModal();
		browser.pause(3000);
	});

});