var HomePageObject = require("./page-objects/HomePageObject.js")
var LoginPageObject = require("./page-objects/LoginPageObject.js")
var BoardPageObject = require("./page-objects/BoardPageObject.js")
describe('kloeckner-i QA Challenge', function(){
    var home;
    var login;
    var board;
    beforeAll(function () {
        home = new HomePageObject();
        login = new LoginPageObject();
        board = new BoardPageObject();
        login.checkelements()
        login.userLogin()
        home.checkelements()
        home.goToBoard()
        board.checkelements()
    });

    it('User can create a list', function () {
        board.addList()
        board.checkListAdded()
    });


    it('User can modify a card details', function() {

    });

    afterAll(function () {
        
    })

});