function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let probe = new Car("Ford", "Probe", 1993);
let cmax = new Car("Ford", "c-Max", 2014);

console.log(probe.make);
console.log(cmax.year);

//when new is used
/*
1. an empty object is created
2. keyword this inside of the constructor function refers to the empty object
3. a return this is added to the constructor function (why you dont need to explicitly return any value)
4. an external link ... (check link, is not important)
*/

//the constructor property
//every single .prototype object has a property called constructor that points back to the
//original function .
//Person.prototype.constructor === Person

//while other programming languages have concept of classes(you can actually create a class)
//javascript does not support just thing, we have to mimic OOP using js constructor functions and the new keyword

//we do not have inheritance, instead we have prototypal inheritance
//to borrow the functionality from one constructor and use it in another, we use the call method
function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

function Motorcycle(make, model, year, motorcycleType){
    Vehicle.call(this, make, model, year);
    this.motorcycleType = motorcycleType;
}

let moto = new Motorcycle("kawasaki", "ninja 500", 2006, "sports");

//exercise
//1. what is the purpose of a constructor function? to create an object
//2. what does the new keyword do? to create an empty object and link it to the this keyword in the constructor
//3. this = this object not the other
//4. a class is like a template for creating objects (similar objects), instance = 1 object of that class
//5.
function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
}

function multiplyFavoriteNumber(number, person){
    return number * person.favoriteNumber;
}

let person1 = new Person("minh", "pham", "blue", 12);
console.log(multiplyFavoriteNumber(31, person1));

function Child(firstName, lastName, favoriteColor, favoriteFood){
    parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}