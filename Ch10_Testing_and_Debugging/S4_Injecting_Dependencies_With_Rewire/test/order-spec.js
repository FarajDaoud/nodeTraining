var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire('../lib/order');

describe("ordering Items", function() {
	beforeEach(function() {
		this.testData = [
			{sku: "AAA", qty: 10},
			{sku: "BBB", qyt: 0},
			{sku: "CCC", qyt: 3}
		];

		order.__set__("inventoryData", this.testData);

	});

	it("order an item when there are enough in stock", function(done) {
		order.orderItem("CCC", 3, function() {
			done();
		});
	});
});