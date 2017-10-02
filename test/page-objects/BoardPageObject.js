var BoardPage = (function() {
	var helpers = require("../helpers/helpers.js")

    function BoardPage() {
        var helper = new helpers();
        var boardPage = '#board'
        var addListButton = '.js-open-add-list'
        var listNameInput = '.list-name-input'
        var saveButton = '[type="submit"]'
        var listElementClass = '.list-header-name'
        var listName = helper.stringGen()
        var cardName = helper.stringGen()
        var cardDescription = helper.stringGen()
        var userComment = helper.stringGen()
        var listElement = '[aria-label='+listName+']'
        var listMenuButton = '.list-header-extras-menu'
        var archiveListMenuEntry = '.js-close-list'
        var addCardButton = '.open-card-composer'
        var cardTextEntry = '.list-card-composer-textarea'
        var cardTitleElement = '.list-card-title'
        var cardDetailsPopup = '.card-detail-window'
        var cardDetailsEdit = '.card-detail-edit'
        var cardDetailsCloseButton = '.dialog-close-button'
        var cardDescriptionElement = '[placeholder="Add a more detailed description…"]'
        var cardDescriptionContent = '.description-content'
        var newCommentSection = '.new-comment'
        var commentBox = '.comment-box-input'
        var lastComment = '.current-comment'
        var commentControls = '.comment-controls'
        var saveCommentButton = '[value="Save"]'
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
        	browser.waitForExist(listElement)
        }
        this.addCard = function() {
        	browser.click(addCardButton)
        	browser.setValue(cardTextEntry, cardName)
        	browser.click(saveButton)
        }
        this.checkCardAdded = function() {
        	return browser
        		.getText(cardTitleElement, (err,res) => {
                res.should.equal(cardName);                   
            })
        }
        this.openCardDetails = function() {
        	browser.click(cardTitleElement)
        	browser.waitForVisible(cardDescriptionElement, 5000)
        }
        this.modifyCardDetails = function() {
        	browser.setValue(cardDescriptionElement, cardDescription)
        	browser.element(cardDetailsEdit).click(saveButton)
        	testText = browser.getText(cardDescriptionContent)
            expect(testText).toEqual(cardDescription)                  
        	browser.element(newCommentSection).waitForEnabled(commentBox, 5000)
            browser.element(newCommentSection).setValue(commentBox, userComment)
        	browser.element(commentControls).waitForEnabled(saveCommentButton, 5000)
        	browser.element(commentControls).click(saveCommentButton)
            testText = browser.getText(lastComment)
            expect(testText.indexOf(userComment)).not.toEqual(-1)                  
        	browser.click(cardDetailsCloseButton)
        }
        this.archiveList = function() {
        	browser.click(listMenuButton)
        	browser.click(archiveListMenuEntry)
        }    
    };

    return BoardPage;

})();

module.exports = BoardPage;


