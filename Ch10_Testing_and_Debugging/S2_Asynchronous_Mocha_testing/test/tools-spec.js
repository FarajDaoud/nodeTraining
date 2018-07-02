var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Tools", function(){

	describe("printName()", function() {

		it("should print the last name first", function() {

			var results = tools.printName({ first: "Alex", last: "Banks"});

			expect(results).to.equal("Banks, Alex");

		});

	});

	describe("loadWiki", function() {

		this.timeout(5000);

		it("Load Abraham Lincoln's wikipedia page.", function(done) {
			tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
				expect(html).to.be.ok;
				done();
			});
		});
	});

});

/*
Sometimes the functions that we need to test need a little bit more time 
to operate. A good example of this is the web request. When we request a 
web page, it's going to take a little bit of time to download that page 
before the task is complete. In order to test a asynchronous process in 
Mocha like downloading a web page, we have to tell Mocha to wait for the 
task to complete before running the test.
*/