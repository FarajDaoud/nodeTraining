//Global timing funcitons
var waitTime = 3000; //after 3 seconds
var currentTime = 0;
var waitInterval = 500; //10 times a second. 500 half a second
var percentWaited = 0;

function writeWaitingPercent(p) {
	process.stdout.clearLine(); //clear the last line.
	process.stdout.cursorTo(0); //Move the cursor up one live.
	process.stdout.write(`waiting ... ${p}%`); //write out the current percentage.
}

var interval = setInterval(function() {
	currentTime += waitInterval;
	//use the build in Math function "floor" to calculate the percentage of the wait time.
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	//pass the percentWaited variable so it can be written to process.stdout.
	writeWaitingPercent(percentWaited);
}, waitInterval);

//Built in function "setTimeout" to call the currently defined function after 3 seconds. 
setTimeout(function() {
	//stop the currently running interval.
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n\n done \n\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);