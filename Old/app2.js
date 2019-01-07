//objects and objects literal
var person = {
    firstname: "John",
    lastname: "Doe",
    greet: function(){
      console.log("Hello, " + this.firstname + " " + this.lastname);
      }
  };
  
  person.greet();
  console.log(person['firstname']);
    
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
  
  //only for test purpose do not use in production
  console.log(johnny.__proto__);
  console.log(jane.__proto__);
  console.log(johnny.__proto__ === jane.__proto__);
     