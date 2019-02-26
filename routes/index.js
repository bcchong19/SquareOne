
/*
 * GET home page.
 */
var user = require('../public/user.json');

exports.view = function(req, res){
  console.log("home info:");
  console.log(user);
  res.render('index', user);
};

exports.update = function (request, response) {
  console.log("OLD");
  console.log(user);
  for (var i = 0; i < user.users.length; i++) {
    user.users[i].logged = "false";
  }
  console.log("NEW");
  console.log(user);
  response.render('login', user);
};