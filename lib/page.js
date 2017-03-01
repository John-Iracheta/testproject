"use strict"

class Page {

	constructor() {
		this.title = 'Home';
	}

	open(path) {
		browser.url('/' + path);
	}

}

module.exports = Page;