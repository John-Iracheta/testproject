/**
    scenario: new user has not filled out profile information. 
*/
var expect = require('chai').expect
var LoginPage = require('../lib/loginPage.page')
var Profile = require('../lib/profile.page')

describe('Log in with new account and fill out real estate course user profile', function() {
	//login
	it('log in', function() {
		LoginPage.open();
		LoginPage.email.setValue('test@test.com');
		LoginPage.password.setValue('password');
		LoginPage.email.submitForm();
		browser.pause(2000);
	});
	//enter basic info
	it('enter basic info', function() {
		Profile.phone.setValue('5122342345');
		Profile.middleInitial.setValue('J');
		Profile.lastName.setValue('Iracheta');
		Profile.selectGender('Male');
		Profile.birthDate.setValue('10/28/1986');
	});
	//enter address info
	it('enter legal address', function() {
		Profile.addressStreet.setValue('123 Congress Ave');
		Profile.addressApt.setValue('100');
		Profile.addressCity.setValue('Austin');
		Profile.addressState.selectByVisibleText('Texas');
		Profile.addressPostal.setValue('78704');
	});
	//enter additional info
	it('enter Additional Information', function() {
		Profile.licenseKey.setValue('123456');
		Profile.licenseExpireDate.setValue('12/31/2017');
		Profile.verificationCheckbox.click();
	});
	//scenario: expected profile value does not appear on page. uncomment to simulate failure.
	// it('enter VIN', function() {
	// 	Profile.vin.setValue('19UUA8F58CA020089');
	// });
	//submits profile and finalizes profile on confirmation screen
	it('submit and finalize profile information', function() {
		Profile.username.submitForm();
		browser.pause(2000);
		Profile.finalizeProfile();
		browser.pause(5000);
	});

});