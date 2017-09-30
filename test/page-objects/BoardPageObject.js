var BoardPage = (function() {

    function BoardPage() {
        this.url = "http://webdriver.io/";
        this.guideButton = "[href='/guide.html']";
        this.apiButton = "[href='/api.html']";
        var boardPage = '.board-main-content'
        this.checkelements = function () {
        	browser.waitForVisible(boardPage, 3000)
        
        }        
    };

    return BoardPage;

})();

module.exports = BoardPage;