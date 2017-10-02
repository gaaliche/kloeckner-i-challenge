var LoginPage = (function() {
    function LoginPage() {
		var loginButton = '#login'
		var user = '#user'
		var password = '#password'
        var url = "https://trello.com/login"
        var email = 'kloeckner-i-challenge@yopmail.com'
        var pwd = 'kloeckner-i-challenge'
        this.userLogin = function() {
        	return browser
            	// .url(url)
            	.setValue(user, email)
            	.setValue(password, pwd)
            	.click(loginButton)

        }
        this.checkelements = function () {
        	browser.url(url)
        	browser.windowHandleMaximize()
            browser.waitForVisible(user, 3000)
            browser.waitForVisible(password, 3000)
            browser.waitForVisible(loginButton, 3000)
        
        }
	};

    return LoginPage;

})();

module.exports = LoginPage;