/*
//every single function that is created in Js has a prototype property
//each object that is created can access its constructor's prototype property via the object's own _proto_ property
//when you create a constructor function, that function will have it's own prototype
function Person(name){
    this.name = name;
}

let tim = new Person("Tim");

Person.prototype; //return the constructor function

//so far the Person constructor has a prototype and has
//only 2 properties: constructor and _proto_
//add a function to the Person prototype
Person.prototype.sayHello = function(){
    return "Hello, " + this.name;
};

let pipi = new Person("Pipi");
console.log(pipi.sayHello());
//any person object will have access to this function

//recap
//any fucntion or property added to the prototype if shared among all instances linked to that prototype
//each constructor function has its own prototype

//overload constructor works - each prototype is linked to 1 constructor name (not overloading constructor)
function Dumb(name){
    this.name = name;
}

function Dumb(name, age){
    this.name = name;
    this.age = age;
}

Dumb.prototype.setConsent = function(consent){
    this.consent = consent;
}

let dumb1 = new Dumb("Phat");
let dumb2 = new Dumb("Khanh", 10);
dumb1.setConsent(true);
dumb2.setConsent(true);
//console.log(dumb1.consent);
//console.log(dumb2.consent);
//prototype works like a static attribute (but normal function)

//constructor best practices
//1. all properties that you do not want to be shared go inside of the constructor function
//2. all properties that you do want to share: inside the prototype (almost all functions)
function Person1 (name){
    this.name = name;
    this.siblings = [];
}

let janey = new Person1("Jane");
janey.siblings.push("Annie");

let tim = new Person1("Tim");
tim.siblings.push("nicole");

*/


//when you want to access a property on an object in JS, there is a lookup process that goes on in order to find the property
//first the properties on the object are checked, if not found then 
//the properties on the prototype of the constructor function are cheched
function Automobile(make, model, year){
    this.make = make;
    this.model = model;
    if(year !== undefined){
        this.year = year;
    }
}

Automobile.prototype.year = 2016;
let newCar = new Automobile("Ferrari", "488 Spider");
console.log(newCar.hasOwnProperty("year"));
console.log(newCar.year);

