//Collecting information with Readline
//Readline Module
//Allows for an easy way to prompt users for answers. 
var readline = require('readline');
//create an interface. readline will control stdin and stdout.
var rl = readline.createInterface(process.stdin, process.stdout);
//realPerson equals a JavaScript Object.
var realPerson = {
	name: '',
	sayings: []
}

rl.question("What is the name of a real person?", function(answer) {
	
	realPerson.name = answer;
	//readline setPrompt allows us to set a prompt for the user.
	rl.setPrompt(`What would ${realPerson.name} say? `);
	//readline prompt display the prompt to the user.
	rl.prompt();
	//readline on('line') will listen for a user submission. 
	rl.on('line', function(saying) {
		realPerson.sayings.push(saying.trim());
		if (saying.toLowerCase().trim() === 'exit') {
			//after the user answers with 'exit' close readline.
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
			rl.prompt();
		}
	});
});
//readline on('close') will listen for a close event.
rl.on('close', function(){
	//%s is a placehoder for a string, %j is a placeholder for json string.
	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();
});