var LoginPage = require('../lib/loginPage.page')

describe('login form', function() {
	it('should log me in with proper credentials', function() {
		LoginPage.open();
		LoginPage.username.setValue('johni1028@gmail.com');
		LoginPage.password.setValue('john1028');
		LoginPage.submit();
	});
})