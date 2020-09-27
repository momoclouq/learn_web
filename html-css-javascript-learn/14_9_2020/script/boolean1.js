let favoriteFood = prompt("what food?");

if (favoriteFood === "pizza"){
    console.log("Mine too, pizzaaaaa baby");
} else {
    console.log("Too bad, I like pizza");
}

//differences between == and ===
//== allows for type corercion of the values, while === does not

5 + "hi";
//type coercion: normally 5 + "hi" will give errors, but not javascript (it coerces 5 into "hi")

if("foo"){
    console.log("this will show up");
}
//"foo" is also coerced into a boolean, which in this case is true

if (null){
    console.log("this wont show up!");
}
//null in the other hand is coerce into false

+"305";
//coerce a string to a number

console.log(5 == "5");

//falsey values
//0 - "" - null - undefined - false - NaN
//all equals false if coerced

//! = not, || = or, && = and

//ternary operator
//expression ? pathIfTrue : pathIfFalse
//this equals to a if condition

let feeling = prompt("How are you feeling today?").toLowerCase();

switch(feeling){
    case "happy":
        console.log("Great, Im happy too");
        break;
    case "sad":
        console.log("Thats too bad");
        break;
    case "hungry":
        console.log("Me too, let's go eat some pizza!");
        break;
    default:
        console.log("I see. Thanks for sharing");
}

