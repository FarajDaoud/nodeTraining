/*
Streams give us a way to asynchronously handle continuous data flows.
Understanding how streams work will dramatically improve the way your 
application handles large data. Streams in Node.js are implementations 
of the underlying abstract extreme
*/
var fs = require("fs");
/*
fs.readFile("./chat.log", "UTF-8", function(err, chatlog) {
	if (err) {

	}

	console.log(`File Read ${chatlog.length}`);
});
*/

/*
So this is a very different way to go about reading the file but it means 
that we do not have to wait to buffer all of the data at once, that we can 
start receiving the text in this file chunk by chunk by chunk and then we 
can put together those data chunks to eventually have our full file.
*/

var stream = fs.createReadStream('./chat.log', "UTF-8");

var data = '';

stream.once("data", function() {
	console.log("\n\n\n");
	console.log("Started Reading File");
	console.log("\n\n\n");
});

stream.on("data", function(chunk) {
	process.stdout.write(` chunk: ${chunk.length} |`);

	data += chunk;
});

stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`Finished Reading File: ${data.length}`);
	console.log("\n\n\n");
});