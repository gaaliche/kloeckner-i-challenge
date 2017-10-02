var helpers = (function() {

	function helpers() {
		this.stringGen = function() {
			var len = 5;
		    var text = " ";
		
		    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		
		    for( var i=0; i < len; i++ )
		        text += charset.charAt(Math.floor(Math.random() * charset.length));
		    return text.trim();
		};
	}
    return helpers;

})();

module.exports = helpers;