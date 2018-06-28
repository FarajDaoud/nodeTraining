//Creating child process with exec
/*
Node.js comes with a Child Process module which allows you to execute external 
processes in your environment. In other words, your Node.js app can run and 
communicate with other applications on the computer that it is hosting. 
*/
var exec = require("child_process").exec;
//'ls' returns a listing of all files and folders of the current folder.
exec("ls", function(err, stdout) {
	if (err) {
		throw err;
	}

	console.log("Listing Finished");
	console.log(stdout);
});
//'git version' returns the current version of git.
exec("git version", function(err, stdout) {
	if (err) {
		throw err;
	}

	console.log("Git Version Executed");
	console.log(stdout);
});

/*
the execute command is a nice tool that allows us to execute external processes 
found in our environment.
*/