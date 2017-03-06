/**
    This test will create a new account, purchse a course, fill out the user profile, sign the contract
    and be ready to begin the LUII course.
*/
var CreateAccount = require('../lib/createAccount.page')
var Profile = require('../lib/profile.page')
var ChallengeQuestion = require('../lib/challengeQuestion.page')
var LoginPage = require('../lib/loginPage.page')
var expect = require('chai').expect

browser.timeouts('implicit', 5000);
//user begins at the sign in page
describe('create a new account', function() {
	//at the sign in page click the create account link
	it('click on the create account link', function() {
		LoginPage.open();
		CreateAccount.createNewAccount();
		browser.pause(2000);
	});
	//enter user information and select course
	it('enter new account details and select course', function() {
		LoginPage.email.setValue('test36@test.com');
		LoginPage.password.setValue('password');
		CreateAccount.firstName.setValue('John');
		CreateAccount.selectCourse('Texas Real Estate - Legal Update II');
		LoginPage.email.submitForm();
	});
	//purchase course
	it('purchase course', function() {
		CreateAccount.creditCardNumber.setValue('4242424242424242');
		CreateAccount.creditCardExpiration.setValue('0318');
		CreateAccount.creditCardCVC.setValue('111');
		CreateAccount.termsAndConditions.click();
		CreateAccount.creditCardNumber.submitForm();
		browser.pause(2000);
		//verify modal appears confirming purchase
		expect(CreateAccount.coursePurchasedModal.getText()).to.contain('Course Purchased!');
		CreateAccount.closeModal();
	});

});
//after creating an account and purchasing the course, the user lands on the profile page
describe('fill out real estate course user profile', function() {
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
	//submit profile and finalize on the confirmation page
	it('submit and finalize profile information', function() {
		Profile.username.submitForm();
		browser.pause(2000);
		Profile.finalizeProfile();
	});

});
//after finalizing the profile the user is taken to the contract agreement page
describe('sign contract', function() {
	//sign contract and user should be taken to the selected course
	it('sign contract', function() {
		browser.pause(3000);
		Profile.fullName.setValue('John Iracheta');
		Profile.submitContractAgreement();
		browser.pause(5000);
	});
});