/**
  This pageobject file handles the challenge question that appears when you login to resume a course.

  User profile information is stored in the profile array. The scrapeAnswers function will scrape the challenge
  question page for the listed answers and store them in the answer array. selectAnswer then iterates over both arrays
  until we find which answer matches a piece of user profile information. That must be the answer so we select it.
*/

"use strict"

var Page = require('./page')

//user profile information is stored here
var profile = ["John", "J", "Iracheta", "512", "234", "2345", "512-234-2345", "123", "Congress", "Ave", "123 Congress", "100", "Austin", "Texas", "78704", "October", "28th", "1986", "Oct 28th, 1986", "test3", "test.com", "test3@test.com"];
//scraped answers will go here
var answers = [];

class ChallengeQuestion extends Page {


	//iterate over the 5 answers presented and store in answers array
	scrapeAnswers() {
		var i;
		for ( i = 0; i < 5; i ++ ) {
			//this hack stores the answer element objects in the answers array 
			answers[i] = browser.execute("return document.getElementsByClassName('ace-btn--question')[" + i + "].text");
			console.log(answers[i].value);
		}
	}

	//this iterates over the profile and answers array until we find the right answer to the challenge question
	selectAnswer() {
		var i;
		var j;
		//label this block so we can break out of the nested loops
		top:
		for ( i = 0; i < answers.length; i++ ) {
			for ( j = 0; j < profile.length; j++ ) {
				//console.log("comparing " + answers[i].value + " to " + profile[j]);    //helpful for debugging evaluation step
				if ( answers[i].value === profile[j] ) {
					//console.log("nailed it!");    //helpful for debugging when match is found
					var found = "=" + answers[i].value;    //creates a link selector webdriver can use to select answer
					browser.element(found, 'href').click();    //this is selecting the answer
					break top;    //break out of both loops
				}
			}
		}
	}
}

module.exports = new ChallengeQuestion();