//localStorage is a mechanism for storing information in a browser for a specific domain
//localStorage: similar to sessionStorage, but the data remains after the browser/tab is closed/refreshed
//these methods store key/pair values

//all of the keys in local/sessionStorage must be string
//while everything in localStorage must be string
/*
localStorage.setItem("instructor", "elie");
localStorage.setItem("favoriteNumber", 18);
localStorage.setItem("isHilarious", true);

console.log(typeof localStorage.getItem("isHilarious"));

localStorage.removeItem("instructor"); //remove 1 key
localStorage.clear();
*/
localStorage.clear();

//adding objects
let instructors = ["Elim", "Matt", "Tim"];

localStorage.setItem("instructors", instructors);
console.log(localStorage.getItem("instructors")); //but it is a string now

//to get back the original data type, we need JSON
//JavaScript Object Notation: data-interchange format, easy for both humans and machines to read and write

//JSON.stringify: to convert js to JSON
//JSON.parse: parse a string as JSON

localStorage.setItem("instructors", JSON.stringify(instructors));

console.log(JSON.parse(localStorage.getItem("instructors"))); //return an array



