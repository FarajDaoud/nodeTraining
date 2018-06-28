var fs = require("fs");

fs.readdirSync("./logs").forEach(function(fileName) {
	fs.unlinkSync("logs/" + fileName);
});

//fs.renameSync("./assets/logs", "./logs");

//console.log("Directory moved");

/*
fs.rmdir("./assets", function(err) {
	if (err) {
		throw err;
	}

	console.log("Assests Directory Removed");
});
*/

fs.rmdir("./logs", function(err) {
	if (err) {
		throw err; //cannot remove a dir unless its empty.
	}

	console.log("Logs Directory Removed");
});
