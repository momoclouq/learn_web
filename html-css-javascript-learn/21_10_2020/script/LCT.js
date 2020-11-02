//let and const
//block vs global vs function scope
//...

//const - cant be ressigned
const favoriteFood = "pad thai";

function testVar(){
    for (let i = 0; i < 10; i++){
        var whatWrong = "this is";
        console.log("in the loop");
    }
    console.log("in the function " + whatWrong);
}

testVar();

//so the difference between var and let: both respect the block, but var links itself to the function(so if we declare the variable in a loop in a function, it will exist outside of the loop)

//string interpolation
//`absdc ${...}` - use the `` for string and ${...} for a changeable value
console.log(`Now we can do string interpolation like ${1+1}`);
let string1 = `abcad + ${1+1}`;
console.log(string1);
//easier for string concatenation

//for of loop - allows us to iterate through iterable (objects, arrays, returned values from generators
