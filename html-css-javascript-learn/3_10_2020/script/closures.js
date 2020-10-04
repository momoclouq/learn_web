//closures - rithm js 2

//closure definition: is when a function is able to access variables from an outer function that has already returned
//example
function outer(a){
    return function inner(b){
        return a + b;
    }
}

outer(5); //this retuns the inner function
outer(5)(2); //this calls the inner function right away

//we can store the inner function in a variable
let laterAdd = outer(10)

//we can now call that inner function
laterAdd(15) //25

//how laterAdd can be stored? through closure

//use cases: many, but one is to create a "private variable" (cannot be accessed directly (and overwritten))
function defineAge(){
    let age = 28;
    return function growUp(){
        return ++age;
    }
}

let ageOnce = defineAge();
ageOnce(); //29
ageOnce(); //30

//another example
function createInstructors(){
    let instructors = ["Elie", "matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

let firstClass = createInstructors();
firstClass.addInstructor("Jennifer");
firstClass.showInstructors(); // ["Elie", "Matt", "Tim", "Jennifer"]

let secondClass = createInstructors();
secondClass.addInstructor("Ashley"); // ["Elie", "Matt", "Tim", "Ashley"]

// on one line

let instructors = createInstructors().showInstructors(); // ["Elie", "Matt", "Tim"]

//module (based on IIFEs)
let instructorModule = (function createInstructors(){
    let instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
})();

//the arguments array - but it is not an array, but an object (special one)
function logAll(){
    console.log(arguments);
}

logAll(2,2);
logAll(10,4,1,2,4);
logAll("asdkacsmda", 3, true);

function displayFirst(){
    console.log(arguments[0]);
}

displayFirst(1,24);
displayFirst("ajhah", true);
displayFirst();

//exercise
console.log("exercise bitches");
function createCounter(){
    let count = 0;
    return function(){
        ++count;
        console.log(count);
    }
}

let firstCounter = createCounter();

firstCounter();
firstCounter();
firstCounter(); // 3
firstCounter(); // 4

let secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4