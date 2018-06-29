//http or https module
var https = require("https");
var fs = require("fs");
//connection options for http module.
var options = {
	hostname: "en.wikipedia.org",
	port: 443, //http port: 80, https port: 443
	path: "/wiki/George_Washington",
	method: "GET"
};
//https request function returns a response object.
var req = https.request(options, function(res) {

	var responseBody = "";

	console.log("Response from server started.");
	console.log(`Server Status: ${res.statusCode}`);
	console.log("Response Headers: %j", res.headers);

	res.setEncoding("UTF-8");
	//First data event listner
	res.once("data", function(chunk) {
		console.log(chunk);
	});
	//Every data event listner
	res.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});
	//"end" data event. 
	res.on("end", function() {
		//save https response to a file.
		fs.writeFile("georgeWashington.html", responseBody, function(err) {
			if (err) {
				throw err;
			}
			console.log("File Downloaded");
		});
	});
});
//"error" listner. only fires when request fails. 
req.on("error", function(err) {
	console.log(`Problem with request: ${err.message}`);
});

req.end();