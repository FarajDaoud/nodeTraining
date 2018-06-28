//filesystem module
var fs = require("fs");
//asynchronously call fs.readdir with a callback function
fs.readdir('./lib', function(err, files){
	if (err) {
		throw err;
	}
	
	console.log(files);
});
//this console log is returned before the callback function runs from fs.readdir
console.log("Reading Files...");

/*
 If we go to the api documentation for the file system what you will notice is
 that every single one of these commands has a synchronous version and an 
 asynchronous version. 
*/