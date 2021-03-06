/**
    This test will create a new account and purchse a course.
*/
var expect = require('chai').expect
var LoginPage = require('../lib/loginPage.page')
var CreateAccount = require('../lib/createAccount.page')

browser.timeouts('implicit', 5000);

describe('create a new account', function() {
	//at the sign in page, click create account link
	it('click on the create account link', function() {
		LoginPage.open();
		CreateAccount.createNewAccount();
		browser.pause(2000);
	});
	//enter user information and select course
	it('enter new account details and select course', function() {
		LoginPage.email.setValue('test30@test.com');
		LoginPage.password.setValue('password');
		CreateAccount.firstName.setValue('John');
		CreateAccount.selectCourse('Texas Real Estate - Legal Update II');
		LoginPage.email.submitForm();
	});
	//purchse course
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

		browser.pause(5000);
	});

});
