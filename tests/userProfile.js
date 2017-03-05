var expect = require('chai').expect
var LoginPage = require('../lib/loginPage.page')

describe('Log in with new account and fill out real estate course user profile', function() {
	it('log in', function() {
		LoginPage.open();
		LoginPage.email.setValue('test4@test.com');
		LoginPage.password.setValue('password');
		LoginPage.email.submitForm();
		browser.pause(2000);
	});

	// it('enter basic info', function() {
	// 	LoginPage.phone.setValue('5122342345');
	// 	LoginPage.middleInitial.setValue('J');
	// 	LoginPage.lastName.setValue('Iracheta');
	// 	LoginPage.selectGender('Male');
	// 	LoginPage.birthDate.setValue('10/28/1986');
	// });

	// it('enter legal address', function() {
	// 	LoginPage.addressStreet.setValue('123 Congress Ave');
	// 	LoginPage.addressApt.setValue('100');
	// 	LoginPage.addressCity.setValue('Austin');
	// 	LoginPage.addressState.selectByVisibleText('Texas');
	// 	LoginPage.addressPostal.setValue('78704');
	// });

	// it('enter Additional Information', function() {
	// 	LoginPage.licenseKey.setValue('123456');
	// 	LoginPage.licenseExpireDate.setValue('12/31/2017');
	// 	LoginPage.verificationCheckbox.click();
	// });

	it('submit and finalize profile information', function() {
		//LoginPage.username.submitForm();
		LoginPage.finalizeProfile();
	});

});