//Serving Files
/*
In order to build a web server, we're going to have to use the https module 
in conjunction with the fs module. When we request a file, we are going to 
have to use the file system to load that file, and then we can use the HTTP 
module to respond with its contents.
*/

var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req, res) {
	console.log(`${req.method} request for ${req.url}`);

	if (req.url === "/") {
		fs.readFile("./public/index.html", "UTF-8", function(err, html) {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(html);
		});
	} else if (req.url.match(/.css$/)) {
		var cssPath = path.join(__dirname, 'public', req.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");

		res.writeHead(200, {"Content-Type": "text/css"});

/*
fileStream.pipe will stream the contents of our file to our response and 
it will automatically handle when that response is over and chunking the 
data and everything for us.
*/
		fileStream.pipe(res);
	//if req matches jpg.
	} else if (req.url.match(/.jpg$/)) {
		var imgPath = path.join(__dirname, 'public', req.url);
		var imgStream = fs.createReadStream(imgPath); //send as binary
		res.writeHead(200, {"Content-Type": "image/jpeg"});
		imgStream.pipe(res);
	} else {
	//if client is not requesting home page respond with 404 file not found.
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("404 File Not Found");
	}

}).listen(3000);

console.log("File server is running on port:3000");


/*
With Node.js, we get a lot of tradeoffs. It's pretty cool that we can build 
servers using JavaScript, but we actually have to build the server....

So we have to see what our users are requesting, and respond with the 
appropriate content. If that content contains files, we actually have 
to read or stream those files to our client. So it's a little bit more 
work than you might be used to, but this actually give us a lot of flexibility.
*/


