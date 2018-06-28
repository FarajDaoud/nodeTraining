//Creating child process with spawn
/*
So spawn is made for longer, ongoing processes with large amounts of data, like our
alwaysTalking. So notice this process doesn't just give us some data and immediately
end, which means that execute is not the function that we want to use with this. 
*/
var spawn = require("child_process").spawn;
//create a child process that calls the spawn function.
//first arg is "node" which is the command that will run in the terminal.
//Second arg is an array of all things that will run after the node command.
var cp = spawn("node", ["alwaysTalking"]);
//create a listner on stdout 'data' event.
cp.stdout.on("data", function(data) {
	console.log(`STDOUT: ${data.toString()}`);
});
//create a listner on child process 'close' event.
cp.on("close", function() {
	console.log("Child Process has ended.");
	process.exit();
});
//after 4 seconds write "stop" in child process stdin. 
setTimeout(function(){
	cp.stdin.write("stop");
}, 4000);

/*
So we were able to spawn the alwaysTalking JavaScript file from our spawn.js file.
Again you're going to use spawn for ongoing, longer processes with more data, and
you can communicate with those processes via standard input and standard output.
*/