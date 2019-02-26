/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars')

var index = require('./routes/index');
var settings = require('./routes/settings');
var login = require('./routes/login');
var footballMain = require('./routes/footballMain');
var basketballMain = require('./routes/basketballMain');
var baseballMain = require('./routes/baseballMain');
var register = require('./routes/register');
var recovery = require('./routes/recovery');
var updateSettings = require('./routes/updateSettings');
var signUp = require('./routes/signUp');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/home', index.view);
app.get('/settings', settings.view);
app.get('/', login.view);
app.get('/footballMain', footballMain.view);
app.get('/basketballMain', basketballMain.view);
app.get('/baseballMain', baseballMain.view);
app.get('/register', register.view);
app.get('/recovery', recovery.view);
app.get('/updateSettings', updateSettings.update);
app.get('/loginUpdate', login.update);
app.get('/out', index.update);
app.get('/signUp', signUp.update);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
