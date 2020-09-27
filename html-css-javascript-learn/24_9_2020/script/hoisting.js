//in short, a variable can be used before it is declared
//declare a variable at the bottom would equal declaring it at the top
//so when we use var to declare a variable, (var x = 5;) it also means that you can use x before the declaration
//but if we use let or const -> we cannot use it before declaration (upgrade)
//so?

sayHi("Maat");

//this works, as function declarationns are fully defined before execution

function sayHi(name){
    return "hi " + name;
}


//this does not works, as at the point of using sayHi, it was not yet defined!
//the reason was "let"/"const"
/*
let sayHi = function(name){
    return 'Hello ' + name;
};
*/