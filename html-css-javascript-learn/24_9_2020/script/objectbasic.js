//object (similar to struct in C++), map keys to values
let firstObj = {
    firstName: "Minh",
    lastName: "Pham",
    isInstructor: true
};

//access object values
console.log(firstObj.firstName);
console.log(firstObj.isInstructor);
console.log(firstObj.ahah);

//or we can use bracket notation
firstObj["firstName"];

//bracket notation vs dot notation
//use dot notation when you can, but sometimes it is not possible
let obj = {};
let person = "Tom";

obj[person] = "This is a person";
obj[1+1+1] = "Three";

//obj.3 is wrong
obj[3]; //"Three" - we NEED to use the bracket notation
obj[person]; //"This is a person"
obj["Tom"]; //"This is a person"
obj.person; //undefined

//keys are always strings in js
let idToName = {
    645: "tim",
    141: "tom",
    15: "minh"
};

idToName["645"];

//adding to objects
idToName["123"] = "inori";

console.log(idToName["123"]);

//remove a key from an object - delete
delete idToName["15"];
console.log(idToName);

