/*
Another feature of the file system module is the ability to create new files,
to write text or binary content to those files, or to append text or binary 
content to an existing file.

So the .fs module will give us the ability to append content to existing files,
or create new files and add content to our newly-created file as well.
*/

var fs = require("fs");
//markdown content
var md = `

Sample Markdown Title
=====================

Sample subtitle
---------------

* point
* point
* point

`;

fs.writeFile("sample.md", md.trim(), function(err) {
	console.log("File Created");
});
