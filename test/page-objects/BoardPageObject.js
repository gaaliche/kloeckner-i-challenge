var BoardPage = (function() {
	var helpers = require("../helpers/helpers.js")

    function BoardPage() {
        var helper = new helpers();
        var boardPage = '#board'
        var addListButton = '.js-open-add-list'
        var listNameInput = '.list-name-input'
        var saveButton = '[type="submit"]'
        // var listName = 'Test'
        var listName = helper.stringGen()
        listElement = '[aria-label='+listName+']'
        this.checkelements = function () {
        	browser.waitForVisible(boardPage, 3000)
        	browser.waitForVisible(addListButton, 3000)
        }
        this.addList = function() {
        	return browser
        		.click(addListButton)
        		.setValue(listNameInput, listName)
        		.click(saveButton)
        }
        this.checkListAdded = function() {
        	browser.getText(listElement, (err,res) => {
                res.should.equal(listName);                   
            })
        }    
        this.archiveList = function() {

        }    
    };

    return BoardPage;

})();

module.exports = BoardPage;


