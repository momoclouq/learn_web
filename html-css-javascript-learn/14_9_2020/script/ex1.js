//exercise boolean logic rithm 1
//part 1

console.log(2 == "2");
console.log(2 === 2);
console.log(10 % 3);
console.log(10 % 3 === 1);
console.log(true && false);
console.log(false || true);
console.log(true || false);

//part 2
let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if (firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if (firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}

//part 3
let value = Math.random();

if (value > 0.5 && value < 1){
    console.log("over 0.5");
} else if (value <= 0.5 && value >= 0) {
    console.log("under 0.5");
} else {
    console.log("something else");
}
