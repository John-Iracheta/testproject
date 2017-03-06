/**
    This pageobject file defines functions for the account creation process.
    This covers the account creation and course purchase pages.
*/
"use strict"

var Page = require('./page')

class CreateAccount extends Page {
	//account creation page elements
	get createAccount() { return browser.element('=Create Account'); }
	get firstName() { return browser.element('#firstName'); }
	get courseDDL() { return browser.element('//select'); }.

	//course purchase page elements
	get creditCardNumber() { return browser.element("[name='number']"); }
	get creditCardExpiration() { return browser.element("[name='expiry']"); }
	get creditCardCVC() { return browser.element("[name='cvc']"); }
	get termsAndConditions() { return browser.element("[name='tandc']"); }
	get coursePurchasedModal() { return browser.element('h1=Course Purchased!'); }

	//clicks create account link on sign in page
	createNewAccount() {
		this.createAccount.click();
	}

	//selects course from the drop down llist
	selectCourse(courseName) {
		this.courseDDL.selectByVisibleText(courseName);
	}

}

module.exports = new CreateAccount();