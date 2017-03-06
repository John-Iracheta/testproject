/**
    scenario: a user has filled out their profile but not finalized it. 
    when they next login, they will be taken to the finalize profile page.
*/
var Profile = require('../lib/profile.page')
var LoginPage = require('../lib/loginPage.page')
var Page = require('../lib/page')

describe('login and finalize profile', function() {
	//user logs in
	it('login', function() {
		LoginPage.open();
		LoginPage.email.setValue('test9@test.com');
		LoginPage.password.setValue('password');
		LoginPage.email.submitForm();
	});
	//user is taken to finalize profile page where this will finalize their profile
	it('finalize profile', function() {
		browser.pause(2000);
		Profile.finalizeProfile();
		browser.pause(5000);
	});

});