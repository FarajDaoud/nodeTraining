/*
We can create directories, we can check for the existence of the directories,
and we're going to be able to move and remove directories just like we'll be
able to move and remove files as well.
*/

var fs = require("fs");

if (fs.existsSync("lib")) {
	console.log("Directory already there");
} else {
	fs.mkdir("lib", function(err) {
		if(err){
			console.log(err);
		} else {
			console.log("Directory Created");
		}
	});
}

