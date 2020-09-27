let favoriteFoods = ["pizza", "dog", "rice"];

favoriteFoods[1];

favoriteFoods[favoriteFoods.length - 1] = "egg";

let formerFavoriteFood = favoriteFoods.shift();

favoriteFoods.push("pumpkin");

favoriteFoods.unshift("java");

console.log(favoriteFoods);

let empti = [];
console.log(empti.pop());

let arr1 = [2,3,4,5];
let arr2 = ["alpha", "gamma", "delta"];
let arr3 = [10,-10,-5,-3,2,1];

arr1.splice(1,1);
arr2.splice(1,0,"beta");
arr3.splice(1,5,9,8,7,6,5,4,3,2,1);

console.log(arr1);
console.log(arr2);
console.log(arr3);
