var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
So now that we've parsed this data, what happened? It just means that 
we have gone in and parsed all the variables that are posted to this 
application, and placed them neatly on the request object.
*/

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' -${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.post("/dictionary-api", function(req, res) {
    skierTerms.push(req.body);
    res.json(skierTerms);
});
/*
if you send a term to dictionary-api/ whatever term you send, I can 
set that up as a routing variable with a colon. So this means that 
I've just created a routing parameter called "term".
*/
app.delete("/dictionary-api/:term", function(req, res) {
    skierTerms = skierTerms.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skierTerms);

});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;