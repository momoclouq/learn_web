let arr = [];

arr.push("minh");
arr.push("Pham");
arr.unshift("purple");

//checkpoint 1
console.log(arr.join("-"));

arr.shift();
//arr.splice(0,1);
//delete arr[0];

let arr2 = [];
arr2[0] = "24";
arr2.push("JavaScript");
//checkpoint 2
console.log(arr2.join("-"));

console.log(arr2.indexOf(42));

let combinedArr = arr.concat(arr2);
console.log(combinedArr.join("-"));

//Part 2
let arr3 = ["JavaScript", "Python", "Ruby", "Java"];

let arr31 = arr3.slice(1,3);
console.log("array 1 " + arr31.join(","));

let arr32 = arr3.concat("Haskell", "Clojure");
console.log("array 2 " + arr32.join(","));

console.log("array 3 " + arr3.join(", "));

//passing value: just use the value, passing reference: use the object itself -> any changes to the "reference" = changes to the object

//includes - return boolean to check if array includes the element, second arguement optional for the starting searching index
let arr4 = [1,2,3,4,5];
console.log(arr4.includes(1,0));
console.log(arr4.includes(5));