var Profile = require('../lib/profile.page')
var ChallengeQuestion = require('../lib/challengeQuestion.page')
var LoginPage = require('../lib/loginPage.page')

browser.timeouts('implicit', 5000);

describe('log in, answer challenge question, sign contract', function() {
	it('log in', function() {
		LoginPage.open();
		LoginPage.email.setValue('test6@test.com');
		LoginPage.password.setValue('password');
		LoginPage.email.submitForm();
	});

	it('answer challenge question', function() {
		browser.pause(3000);
		ChallengeQuestion.scrapeAnswers();
		ChallengeQuestion.selectAnswer();
		LoginPage.closeModal();
	});

	it('sign contract', function() {
		browser.pause(2000);
		Profile.fullName.setValue('John Iracheta');
		Profile.submitContractAgreement();
		browser.pause(5000);
	});
	
});