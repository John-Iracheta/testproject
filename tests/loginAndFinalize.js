var Profile = require('../lib/profile.page')
var LoginPage = require('../lib/loginPage.page')
var Page = require('../lib/page')

describe('login and finalize profile', function() {
	it('login', function() {
		LoginPage.open();
		LoginPage.email.setValue('test9@test.com');
		LoginPage.password.setValue('password');
		LoginPage.email.submitForm();
	});

	it('finalize profile', function() {
		browser.pause(2000);
		Profile.finalizeProfile();
		browser.pause(5000);
	});

});