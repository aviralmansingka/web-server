var express = require('express');
var port = 3000;
var app = express();

var middleware = {
	requireAuthentication : function(req, res, next) {
		console.log('Private log hit');
		next();
	},
	logger: function(req, res, next) {
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on ' + new Date().toString());
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('Express Server started on port ' + port + '!');
});