var greet = require('./greet1');
greet();


var greet2 = require('./greet2').greet;
// //or but first is better
//greet2.greet();
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changed Hello world";

var greet3b = require('./greet3');
greet3b.greet();
//returns "Changed Hello world"; because it is reference to an object greet3 (require cached it in memory)

var Greet4 = require('./greet4');
var grtr = new Greet4(); //constructor so capital letter
grtr.greet();


var greet5 = require("./greet5").greet;
greet5();
//or var greet5 = require("./greet5")
//greet5.greet();