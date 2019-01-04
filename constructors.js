//Constructor
function Person(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

//var john = new Person("John", "Doe");
//console.log(john.firstname);

//Prototype build in function
Person.prototype.greet = function (){
  console.log("Hello, " + this.firstname + " " + this.lastname);
}

var johnny = new Person("Johnny", "Doe")
johnny.greet();

var jane =  new Person ("Jane", "Doe")
jane.greet();

//only for test reason do not use in production
console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
 

