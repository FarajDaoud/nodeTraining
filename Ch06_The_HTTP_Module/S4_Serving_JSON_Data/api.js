//Serving JSON Data
/*
We can also use the HTTP module to create an HTTP API, or a server whose 
primary purpose is to serve JSON data. APIs are used to serve data to client 
applications. These applications typically include mobile apps, and single 
page websites, but, any client who can make an HTTP request can communicate 
with an API.
*/

var http = require("http");
//represents json data found in file
var data = require("./data/inventory");

http.createServer(function(req, res) {
	//if request is home page respond with all the data
	if (req.url === "/") {
		res.writeHead(200, {"Content-Type": "text/json"});
		//returns data as json string.
		res.end(JSON.stringify(data));
	} else if (req.url === "/instock") {
		listInStock(res);
	} else if (req.url === "/onorder") {
		listOnBackOrder(res);
	} else {
		res.writeHead(404, {"Content-Type":"text/plain"});
		res.end("Whoops... Data not found");
	}

	

}).listen(3000);

console.log("Listening on port:3000");

function listInStock(res) {
	//filters data returns true or false
	var inStock = data.filter(function(item) {
		return item.avail === "In stock";
	});

	res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res) {
	var onOrder = data.filter(function(item) {
		return item.avail === "On back order";
	});

	res.end(JSON.stringify(onOrder));
}






