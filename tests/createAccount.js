var expect = require('chai').expect
var LoginPage = require('../lib/loginPage.page')

browser.timeouts('implicit', 5000);

describe('create a new account', function() {
	it('click on the create account link', function() {
		LoginPage.open();
		LoginPage.createNewAccount();
		browser.pause(2000);
	});

	it('enter new account details and select course', function() {
		LoginPage.email.setValue('test18@test.com');
		LoginPage.password.setValue('password');
		LoginPage.firstName.setValue('John');
		LoginPage.selectCourse('Texas Real Estate - Legal Update II');
		LoginPage.email.submitForm();
	});

	it('purchase course', function() {
		LoginPage.creditCardNumber.setValue('4242424242424242');
		LoginPage.creditCardExpiration.setValue('0318');
		LoginPage.creditCardCVC.setValue('111');
		LoginPage.termsAndConditions.click();
		LoginPage.creditCardNumber.submitForm();
		browser.pause(2000);

		expect(LoginPage.coursePurchasedModal.getText()).to.contain('Course Purchased!');
		LoginPage.closeCoursePurchasedModal();

		browser.pause(5000);
	});

});
