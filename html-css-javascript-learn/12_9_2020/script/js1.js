/*
let firstName = "Matt";
let lastName ="Lane";
let fullName = firstName + " " + lastName;
*/

//open console in safafi: option command c

let firstName = prompt("What is your firstname?");

console.log("Hi, " + firstName + "!");
console.log("How are you doing, " + firstName + "?");
console.log("See you later, " + firstName + "!");

//check errors
let phrase = 'Matt said, "I haven\'t been to Chile", the other day.';
console.log(phrase);
//answer: it wont run (the javascript codes)

//figuring out a variable's type
console.log((typeof ""));

//converting between types
let num = 5;
let bool = true;

//convert everything to string
console.log(num.toString());
console.log(bool.toString());

//convert to a number -> parse from left to right
console.log(parseInt("2"));
console.log(parseFloat("2.1"));
console.log(parseInt("2.4asd"));
console.log(parseFloat("2.4asd"));
console.log(parseFloat("as2.5a"));

//sth similar but unstable
console.log(Number("2"));
console.log(Number("asd2"));

//NaN = not a number
//to check if an expression is a number or not: check if it is NaN (or not)
let validConversion = Number("2");
console.log("Is validConversion NaN? ", isNaN(validConversion));

//note on var and const: var is old and replaced by let on modern javascript
//const = unredeclarable