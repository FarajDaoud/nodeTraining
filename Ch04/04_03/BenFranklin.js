//Handling events with EventEmitter
/*
var events = require('events');
//create a new instance of the emitter. EventEmitter is a constructor.
var emitter = new events.EventEmitter();
//when a custom event is raised will pass a message and a status
//to this callback function asynchronusly
emitter.on('customEvent', function(message, status) {
	console.log(`${status}: ${message}`);
});
//will fire the event customEvent
emitter.emit('customEvent', "Hello World", 200);
*/
//chain on require to pull out the constructor function from the events module.
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};
//Person object inherits all properties of the EventEmitter object.
util.inherits(Person, EventEmitter);

var ben = new Person("Ben Franklin");
//create a listner for the 'speak' event.
ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

//Person can call an 'emit' function. emit a 'speak' event. 
ben.emit('speak', "You may delay, but time will not.");

/*
EventEmitter gives us a way to create custom objects that raise custom events 
that can be handled asynchronously.
*/