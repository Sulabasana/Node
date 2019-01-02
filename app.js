// var a = 1;
// var b = 2;
// var c = a + b;

// console.log(c);

//function statment

function greet(){
    console.log('hi')
}

greet();


//function are first-class
function logGreeting(fn){
    fn();
}

logGreeting(greet);


//fumction expression
var greetMe = function(){
    console.log("Hi Tony")
}
greetMe();

//it is first-class
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function(){
    console.log("Hello Tony")
})