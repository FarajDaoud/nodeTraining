var express = require("express");
var cors = require("cors");
var app = express();

var skierTerms = [
	{
		term: "Rip",
		defined: "To move at a high rate of speed"
	},
	{
		term: "Huck",
		defined: "To throw your body off of something, usually a natural feature like a cliff"
	},
	{
		term: "Chowder",
		defined: "Powder after it has been sufficiently skied"
	}
];

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));
//allows any domain to access files in the './public' directory.
app.use(cors());
/*
Express has decorated these objects, has added some functionality to 
them to make things easy for us. For instance, the response object 
now has a json function. In the response, json function will simply 
take a json object, like our skiier terms and automatically handle 
stringifying it, and setting up the headers to reply with a json 
response.
*/
app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;

/*
Cors stands for "cross origin resource sharing," and this specific 
module is a piece of middleware that we can add to our Epress pipeline.
*/