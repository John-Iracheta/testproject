"use strict"

var Page = require('./page')

class CreateAccount extends Page {
	
	get createAccount() { return browser.element('=Create Account'); }
	get firstName() { return browser.element('#firstName'); }
	get courseDDL() { return browser.element('//select'); }

	get creditCardNumber() { return browser.element("[name='number']"); }
	get creditCardExpiration() { return browser.element("[name='expiry']"); }
	get creditCardCVC() { return browser.element("[name='cvc']"); }
	get termsAndConditions() { return browser.element("[name='tandc']"); }
	get coursePurchasedModal() { return browser.element('h1=Course Purchased!'); }

	createNewAccount() {
		this.createAccount.click();
	}

	selectCourse(courseName) {
		this.courseDDL.selectByVisibleText(courseName);
	}

}

module.exports = new CreateAccount();