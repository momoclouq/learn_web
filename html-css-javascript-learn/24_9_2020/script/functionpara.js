function add(number1, number2){
    return number1 + number2;
}

console.log(add(1,2));

//scope
//every variable declared without let = global variable when the method contains it execute
//use let to declare the scope of that variable (within a method)
let globalvariable = "I live in the global";

function makeNewScope(){
    let functionScopevariable = "what";
}

console.log(globalvariable);
makeNewScope();
console.log(functionScopevariable);

