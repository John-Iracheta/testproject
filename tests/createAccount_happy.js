var CreateAccount = require('../lib/createAccount.page')
var Profile = require('../lib/profile.page')
var ChallengeQuestion = require('../lib/challengeQuestion.page')
var LoginPage = require('../lib/loginPage.page')
var expect = require('chai').expect

browser.timeouts('implicit', 5000);

describe('create a new account', function() {
	it('click on the create account link', function() {
		LoginPage.open();
		CreateAccount.createNewAccount();
		browser.pause(2000);
	});

	it('enter new account details and select course', function() {
		LoginPage.email.setValue('test36@test.com');
		LoginPage.password.setValue('password');
		CreateAccount.firstName.setValue('John');
		CreateAccount.selectCourse('Texas Real Estate - Legal Update II');
		LoginPage.email.submitForm();
	});

	it('purchase course', function() {
		CreateAccount.creditCardNumber.setValue('4242424242424242');
		CreateAccount.creditCardExpiration.setValue('0318');
		CreateAccount.creditCardCVC.setValue('111');
		CreateAccount.termsAndConditions.click();
		CreateAccount.creditCardNumber.submitForm();
		browser.pause(2000);

		expect(CreateAccount.coursePurchasedModal.getText()).to.contain('Course Purchased!');
		CreateAccount.closeModal();
	});

});

describe('fill out real estate course user profile', function() {

	it('enter basic info', function() {
		Profile.phone.setValue('5122342345');
		Profile.middleInitial.setValue('J');
		Profile.lastName.setValue('Iracheta');
		Profile.selectGender('Male');
		Profile.birthDate.setValue('10/28/1986');
	});

	it('enter legal address', function() {
		Profile.addressStreet.setValue('123 Congress Ave');
		Profile.addressApt.setValue('100');
		Profile.addressCity.setValue('Austin');
		Profile.addressState.selectByVisibleText('Texas');
		Profile.addressPostal.setValue('78704');
	});

	it('enter Additional Information', function() {
		Profile.licenseKey.setValue('123456');
		Profile.licenseExpireDate.setValue('12/31/2017');
		Profile.verificationCheckbox.click();
	});

	it('submit and finalize profile information', function() {
		Profile.username.submitForm();
		browser.pause(2000);
		Profile.finalizeProfile();
	});

});

describe('sign contract', function() {

	it('sign contract', function() {
		browser.pause(3000);
		Profile.fullName.setValue('John Iracheta');
		Profile.submitContractAgreement();
		browser.pause(5000);
	});
});