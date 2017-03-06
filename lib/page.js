/**
    This is the pageobject that all others inherit from. 
*/
"use strict"

class Page {

	constructor() {}
	//opens a new browser session and appends string parameter to base url
	open(path) {
		browser.url('/' + path);
	}
	//closes most modals which contain a 'continue' button
	closeModal() {
		browser.element('//button[contains(.,"Continue")]').click();
	}

}

module.exports = Page;