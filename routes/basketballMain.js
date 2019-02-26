var user = require('../public/user.json');

exports.view = function(req, res) {
	console.log(user);
	res.render('basketballMain', user);
};