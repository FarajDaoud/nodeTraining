var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock");

describe("Tools", function() {

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		});
	});

	describe("loadWiki()", function() {

		before(function() {

			nock("https://en.wikipedia.org")
			.get("/wiki/Abraham_Lincoln")
			.reply(200, "Mock Abraham Lincoln Page");

		});

		it("Load Abraham Lincoln's wikipedia page", function(done) {

			tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
				expect(html).to.equal("Mock Abraham Lincoln Page");
				done();
			});

		});

	});

});

/*
The "loadWiki" function is actually hitting Wikipedia. That's how we 
want this function to work in production, but when we're testing it, 
this seems a little unnecessary and a little bit time consuming. The 
solution is to create a Mock Wikipedia, so that when we actually run 
this test, we don't have to hit Wikipedia, but our "loadWiki" function 
can interact with our Mock as if it were Wikipedia. There's a node 
package called "nock" that will help us do this exact thing. We can use 
"nock" to create mock web servers so that when we test any of our 
functions that require hitting a web server, we can hit a fake or mock 
web server instead.
*/

