var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);
/*
Module.exports is a Javascript object. We can use it like any Javascript object. 
We can dot notate on it, bracket notate, set it to an object literal or any 
Javascript type. In this case, I'm setting module.exports to our person constructor 
function. Module.exports is the object that is returned by the require statement. 
When we require this module, we will return anything that is on module.exports.
*/
module.exports = Person;