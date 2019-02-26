var user = require('../public/user.json');

exports.view = function(req, res) {
	res.render("register", user);
};