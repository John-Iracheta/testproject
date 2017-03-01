"use strict"

var Page = require('./page')

class LoginPage extends Page {
	
	get username() { return browser.element('#email'); }
	get password() { return browser.element('#password'); }

	open() {
		super.open('user/signin');
	}

	submit() {
		this.username.submitForm();
	}

}

module.exports = new LoginPage();