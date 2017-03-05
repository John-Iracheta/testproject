var ChallengeQuestion = require('../lib/challengeQuestion.page')
var LoginPage = require('../lib/loginPage.page')

browser.timeouts('implicit', 5000);

describe('log in and answer challenge questions', function() {
	it('log in', function() {
		LoginPage.open();
		LoginPage.email.setValue('test3@test.com');
		LoginPage.password.setValue('password');
		LoginPage.email.submitForm();
	});

	it('scrape challenge questions', function() {
		browser.pause(3000);
		ChallengeQuestion.scrapeAnswers();
		ChallengeQuestion.selectAnswer();
	});
});