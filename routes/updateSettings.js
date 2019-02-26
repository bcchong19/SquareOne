var user = require("../public/user.json");

exports.update = function(request,response) {
	if(request.query.username != "" || request.query.password != "" || request.query.football != "" || request.query.basketball != "" || request.query.baseball != "" ){
		var name = request.query.username;
		var pass = request.query.password;
		var fball = "unchecked";
		var bBall = "unchecked";
		var base = "unchecked";
		var displayfball = "hidden";
		var displaybBall = "hidden";
		var displaybase = "hidden";
		if(request.query.football){
			fball = "checked";
			displayfball = "on";
		}
		if(request.query.basketball){
			bBall = "checked";
			displaybBall = "on";
		}
		if(request.query.baseball){
			base = "checked";
			displaybase = "on";
		}

		console.log("OLD");
		console.log(user.users[0].preferences);

		var playbooks = user.users[0].playbooks;

		var newUser = {
			"username": name,
			"password": pass,
			"logged" : "true",
			"preferences": [
            	{
            		"sport": "football",
                        "check": fball,
                        "display": displayfball
            	},
            	{
            		"sport": "basketball",
                        "check": bBall,
                        "display": displaybBall
            	},
            	{
            		"sport": "baseball",
                        "check": base,
                        "display": displaybase
            	}	
            ],
            "playbooks": playbooks
		}
		
		user.users.pop();
		user.users.push(newUser);

		console.log("NEW");
		console.log(user.users[0].preferences);
	}

	response.render('settings', user);
}
