let primes = [2,3,5,7,11];
let names = ["Alice", "Bob", "Charlie"];
let booleans = [true, false, false, true];
let mixedTypes = ["What's up with this? -->", ["Woah", "babay"]];
let emptyArray = [];

//you can put anything in an array (works like a list in python)
//reference type
console.log(primes);
console.log("wa");
console.log(typeof names);

//access an array
let arr = [1,3,6];
arr[0];
arr[2];
arr[3]; //wrong, but still runs
console.log(arr[arr.length - 1]);

//adding to arrays, arr[3] or arr[4] is undefined
//arr[5] = "whoa";
//console.log(arr);

//push - put an element at the bottom of an array (the end of an array)
arr.push(7);

//unshift - put an element in at the top of an array
arr.unshift("yukino");

//shift - remove the first element
arr.shift();

//pop - remove the last element
arr.pop();

//delete - delete an element in an array, but left that position undefined
delete arr[1]; // arr[0] undefined arr[2]

//splice - return an array of removed elements (and also remove them from the original)
let arr2 = [1,2,3,4];
arr2.splice(0,1); //from index 0 remove 1 element, index 0 counts
console.log(arr2);

arr2.splice(1,4,3,3,3); //from index 1, remove 4 elements, then add 3 elements(3,3,3) starting from index 1
console.log(arr2);

