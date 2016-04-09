module.exports = {
	requireAuthentication : function(req, res, next) {
		console.log('Private log hit');
		next();
	},
	logger: function(req, res, next) {
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on ' + new Date().toString());
		next();
	}
};