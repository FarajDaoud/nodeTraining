//Intro to Express
var express = require("express");
//create express application instance. 
var app = express();
//create middleware
/*
You can think of middleware as being customized plugins that we can use 
with Express to add functionality to our application.

 each piece of middleware is a function that has three arguments: 
 the request, the response, and the next function that you will invoke 
 once you are finished.
*/
app.use(function(req, res, next) {

	console.log(`${req.method} request for '${req.url}'`);
	next();
});
//invoke static file server that comes with express and add 
//it to our app pipeline as a piece of middleware. 
//requires a name of a directory that we would like to server 
//static files from.
app.use(express.static("./public"));
//tell express app to listen on port:3000.
app.listen(3000);

console.log("Express app running on port:3000");
//export the app module. (optional) If I export this application 
//instance as a module, that means I can include this application 
//instance in other files.
module.exports = app;



