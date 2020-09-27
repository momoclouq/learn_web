//length of an array: arr.length
let arr = [1,2,3,4];
console.log(arr.length);

//slice - make a copy of an array (or a part of an array)
let arr2 = [1,2,3,4,5];
let copyarr2 = arr2.slice();
console.log(copyarr2);

let copysubarr2 = arr2.slice(1,3); //not including the last index -> only 2 elements in the array
console.log(copysubarr2);

//concat - joins 2 arrays together (or more)
//return an array
let arr3 = [1,2,3];
let arr4 = [4,5,6];
let arr5 = [7,8,9];
let combined1 = arr3.concat(arr4);
console.log(combined1);

let combined2 = arr3.concat(arr4,arr5);
console.log(combined2)

//you can pass literally everything to the concat function
let combined3 = arr3.concat("haha", "1maks");
console.log(combined3);

//join - join elements of an array into a string separated by input arguement (delimeter)
//return a string
let arrHello = ["Hello", "World"];
console.log(arrHello.join(" "));

let arrA = ["I", "have", "announcement"];
console.log(arrA.join("!"));

//indexOf - find the first index of the element passed in the arguement (from the left)
//return -1 if not found
let arrFind = [1,2,3,4,5,1,2,5,2,5,1,7235];
console.log(arrFind.indexOf(1));
console.log(arrFind.indexOf(3));
console.log(arrFind.indexOf(7235));

//lastIndexOf - same as indexOf but find from the bottom
