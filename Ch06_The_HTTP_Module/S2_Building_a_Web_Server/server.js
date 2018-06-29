//Building a Web Server
var http = require("http");
//req = request from client, res = response to client.
var server = http.createServer(function(req, res) {

/*
So, we will have a blank response object also sent to this request function, 
and it's going to be our job to complete the response. We will do so by 
writing the response headers. So I'm going to use the response.writeHead 
method to complete our response headers. The first argument that we add 
to this method is going to be our response status code. 200 means that we 
have a successful response. The second argument represents a JavaScript 
literal of all the headers that I am going to add to this response.
*/

	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
	`);

});
//Listen for any request on the local machine for port 3000. 
server.listen(3000);

console.log("Server listening on port 3000.");

//To navigate to the created server on the local machine navigate to
//http://localhost:3000