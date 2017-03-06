/**
    This pageobject defines functions and elements on the login page as well as the 
    reset password flow.
*/
"use strict"

var Page = require('./page')

class LoginPage extends Page {
	//signin page elements
	get email() { return browser.element('#email'); }
	get password() { return browser.element('#password'); }
	get invalidCredentialModal() { return browser.element('h1=Oh No!'); }    //popup modal when invalid pw is entered
	get resetPasswordConfirmation() { return browser.element('h1=Alright!'); }    //popup modal when pw reset request is submitted

	//this opens a browser window. this appends the string parameter to the base url specified in the wdio.conf file
	open() {
		super.open('user/signin?app=re');
	}
	//reset pw link on signin page
	resetPassword() {
		browser.element('=Reset Password').click();
	}
	//reset pw button on the reset pw page
	requestReset() {
		browser.element('//button[contains(.,"Request Reset")]').click();
	}
	//resume course button after successful signin
	resumeCourse() {
		browser.element('=ResumeCourse');
	}

}

module.exports = new LoginPage();