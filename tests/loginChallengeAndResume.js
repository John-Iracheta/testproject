var ChallengeQuestion = require('../lib/challengeQuestion.page')
var LoginPage = require('../lib/loginPage.page')

describe('login, answer challenge question and resume course', function() {
	it('login', function() {
		LoginPage.open();
		LoginPage.email.setValue('test3@test.com');
		LoginPage.password.setValue('password');
		LoginPage.email.submitForm();
	});

	it('answer challenge question', function() {
		browser.pause(4000);
		ChallengeQuestion.scrapeAnswers();
		ChallengeQuestion.selectAnswer();
		browser.pause(2000);
		LoginPage.closeModal();
	});

	it('resume course', function() {
		LoginPage.resumeCourse();
	});

});