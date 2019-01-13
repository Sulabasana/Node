var Emitter = require("events")//removing ./ because it is built in feature
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log("Somwehere, someone said hello")
})

emtr.on(eventConfig.GREET, function(){
    console.log("A greeting occured!")
})

console.log("Hello")

emtr.emit(eventConfig.GREET);