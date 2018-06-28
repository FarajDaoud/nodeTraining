/*
Another feature of the fs module is the ability to read the contents of files. 
We can read the contents of both text and binary files. If we are reading the 
contents of a text file, we have to make sure that we send the read file function 
a text encoding, like UTF-8, otherwise it will automatically read our files as 
binary, giving us the Node.js buffer class
*/

var fs = require("fs");
var path = require("path");

/*
fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents) {
	if (err) {
		console.log(err);
	}
	console.log(contents);
});
*/

fs.readdir("./lib", function(err, files) {
	files.forEach(function(fileName) {
		var file = path.join(__dirname, "lib", fileName);
		var stats = fs.statSync(file);
		if(stats.isFile() && fileName !== ".DS_Store") {
			fs.readFile(file, "UTF-8", function(err, contents) {
				console.log(contents);
			});
		}
	});
});
