var Shows = require('./models/shows');
var Networks = require('./models/networks');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	app.get('/api/shows/list', function(req, res) {
		var query = req.query
		Shows.find(query).sort('rank').exec(function(err, shows) {
			if (err)
				res.send(err)
			res.json(shows); // return all todos in JSON format
		});
	});

	app.get('/api/networks/list', function(req, res) {
		var query = req.query
		console.log(query);
		Networks.find(query).sort('rank').exec(function(err, networks) {
			if (err)
				res.send(err)
			res.json(networks); // return all todos in JSON format
		});
	});
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};