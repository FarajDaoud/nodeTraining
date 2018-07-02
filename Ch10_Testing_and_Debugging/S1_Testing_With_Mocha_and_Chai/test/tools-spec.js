var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("printName()", function() {
	it("should print the last name first", function() {
		var results = tools.printName({ first: "Faraj", last: "Daoud"});
		expect(results).to.equal("Daoud, Faraj");
	});
});

/*
Unit testing is one of the best ways to uncover hidden bugs in your 
applications.

And we are going to participate in test-driven development. That means 
that we are going to watch the test first, watch the test fail, and 
then write our code to make our test pass.

So, what we are going to do first to write this test is we're going to 
need an Assertion Engine. Mocha gives us a Suite for describing, running 
and building tests but it does not give us a way to check values.
*/