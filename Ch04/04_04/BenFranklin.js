//Exporting custom modules
//need to require Person contstructor
/*
When we've been requiring core modules, we simply require them by name. 
When we require A custom module in our file system, we actually have to put the 
path to that module. This module is in the library folder, the Lib folder, and 
it's Person.js.
*/ 
var Person = require("./lib/Person");

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

george.on('speak', function(said) {
	console.log(`${this.name} -> ${said}`);
});

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone than to be in bad company.");