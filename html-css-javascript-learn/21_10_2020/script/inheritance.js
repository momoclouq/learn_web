function Automobile(make, model, year) {
    this.make = make;
    this.model = model;
    if (year !== undefined) {
        this.year = year;
    }
}

Automobile.prototype.year = 2016;
let probe = new Automobile("Ford", "Probe", 1993);

probe.hasOwnProperty("year"); // returns true

probe.year; // returns 1993

//where does hasOwnProperty come from? Object constructor function (Object.prototype)
//you can check the inheritance chain
probe._proto_; //Object
console.dir(probe);

//Creating your Own inheritance chain
function Parent(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Parent.prototype.sayHi = function(){
    return thí.firstName + " " + this.lastName + " says hi!";
}

function Child(firstName, lastName){
    Parent.apply(this, arguments);
}

//this is how we inherit functions
//create a new prototype + reset the constructor
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

let c = new Child("Bran", "Stark");
c.sayHi();

//what does Object.create do?
//if we just assign them as Child.prototype = Parent.prototype, we just copy the reference
