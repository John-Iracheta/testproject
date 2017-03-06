"use strict"

class Page {

	constructor() {}

	open(path) {
		browser.url('/' + path);
	}

	closeModal() {
		browser.element('//button[contains(.,"Continue")]').click();
	}


}

module.exports = Page;