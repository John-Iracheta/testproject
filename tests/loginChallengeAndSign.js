/**
    scenario: user has completed profile but not signed contract. this will sign in user
    answer the challenge question and take user to contract agreement page to sign. 
*/
var Profile = require('../lib/profile.page')
var ChallengeQuestion = require('../lib/challengeQuestion.page')
var LoginPage = require('../lib/loginPage.page')

browser.timeouts('implicit', 5000);

describe('log in, answer challenge question, sign contract', function() {
	//login
	it('log in', function() {
		LoginPage.open();
		LoginPage.email.setValue('test6@test.com');
		LoginPage.password.setValue('password');
		LoginPage.email.submitForm();
	});
	//answer challenge question
	it('answer challenge question', function() {
		browser.pause(3000);
		ChallengeQuestion.scrapeAnswers();
		ChallengeQuestion.selectAnswer();
		LoginPage.closeModal();
	});
	//sign contract then user will be allowed to begin course.
	it('sign contract', function() {
		browser.pause(2000);
		Profile.fullName.setValue('John Iracheta');
		Profile.submitContractAgreement();
		browser.pause(5000);
	});
	
});