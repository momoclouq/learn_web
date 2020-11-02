//arrow funtions: alternative to the keyword fnction
//denoted by the => characters

//new rules:
//if the arrow function is all on 1 line - an implicit return is added (do not need the keyword return)
//if more than 1 line: {} must be used (like a regular function)
//same rule applies for arguments
//example
var add = (a,b) => a + b;
var shout = str => str.toUpperCase();
var multilineArrowFunction = a => {
    let b = a * a;
    return a + b;
}

//call back example
//arr.map(val => val * 2);

//arrow functions lexically bind the this value
let objNew = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(() => {
            console.log(`Hi, I am ${this.firstName}`);
        }, 1000);
    }
}

objNew.sayHi();

//test oop
function Parent(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let Dave = new Parent("dave", "james");

Parent.prototype.nameWhat = function(){
    return this.firstName + this.lastName;
};

Parent.prototype.testing = () => {
    return this.firstName + this.lastName;
};

console.log(Dave.nameWhat());
console.log(Dave.testing());