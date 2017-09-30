var HomePage = (function() {

    function HomePage() {
        var boardsList = '.boards-page-board-section-list'
        var board = '=kloeckner-i-challenge'
        this.goToBoard = function() {
        	return browser
        		.element(boardsList).click(board)
        }

        this.checkelements = function () {
        	browser.waitForVisible(boardsList, 5000)
        
        }
    };

    return HomePage;

})();

module.exports = HomePage;