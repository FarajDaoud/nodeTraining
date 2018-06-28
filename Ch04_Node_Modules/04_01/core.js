//Core modules (Path, Util, v8)

//Path module
var path = require('path');

console.log( path.basename(__filename) );

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads);

//Utillity module
var util = require('util');

util.log( path.basename(__filename) );

util.log(dirUploads);

//V8 Module
var v8 = require('v8');

util.log(v8.getHeapStatistics());

