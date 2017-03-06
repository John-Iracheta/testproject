/**
    scenario: all user account creation steps have been completed. user is returning
    to resume their course. This will log in, answers the challenge question and 
    take them to their selected course.
*/
var ChallengeQuestion = require('../lib/challengeQuestion.page')
var LoginPage = require('../lib/loginPage.page')

describe('login, answer challenge question and resume course', function() {
	//login
	it('login', function() {
		LoginPage.open();
		LoginPage.email.setValue('test3@test.com');
		LoginPage.password.setValue('password');
		LoginPage.email.submitForm();
	});
	//answer the challenge question
	it('answer challenge question', function() {
		browser.pause(4000);
		ChallengeQuestion.scrapeAnswers();
		ChallengeQuestion.selectAnswer();
		browser.pause(2000);
		LoginPage.closeModal();
	});
	//resume course
	it('resume course', function() {
		LoginPage.resumeCourse();
	});

});