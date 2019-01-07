//Revealing Module Pattern
var greeting = "Hello World!!!!"

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}