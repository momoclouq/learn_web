//patterns are reusable solutions to solve potential issues when building application
//three types of design patterns
//creational: focused on object creation
//structural: focused on managing relationships between objects
//ensures that when one part of the application changes, it does not affter other parts
//behavioral: managing communicatin between objects

//some creational design patterns
//constructor pattern:
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var matt = new Person("Matt", "Lane");
var elie = new Person("Elie", "Schoppik");
var tim = new Person("Tim", "Garcia");

matt.__proto__ === elie.__proto__ // true
tim.constructor === Person // true

//check link