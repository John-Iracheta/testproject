"use strict"

var Page = require('./page')

var profile = ["John", "J", "Iracheta", "512", "234", "2345", "512-234-2345", "123", "Congress", "Ave", "123 Congress", "100", "Austin", "Texas", "78704", "October", "28th", "1986", "Oct 28th, 1986", "test3", "test.com", "test3@test.com"];
var answers = [];

class ChallengeQuestion extends Page {

	scrapeAnswers() {
		var i;
		for ( i = 0; i < 5; i ++ ) {
			answers[i] = browser.execute("return document.getElementsByClassName('ace-btn--question')[" + i + "].text");
			console.log(answers[i].value);
		}
	}

	selectAnswer() {
		var i;
		var j;
		top:
		for ( i = 0; i < answers.length; i++ ) {
			for ( j = 0; j < profile.length; j++ ) {
				console.log("comparing " + answers[i].value + " to " + profile[j]);
				if ( answers[i].value === profile[j] ) {
					console.log("nailed it!");
					var found = "=" + answers[i].value;
					browser.element(found, 'href').click();
					break top;
				}
			}
		}
	}
}

module.exports = new ChallengeQuestion();