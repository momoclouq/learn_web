//default parameters
let add = (a=12, b=12) => {
    return a+b;
};

console.log(add());
console.log(add(0));
console.log(add(0,0));

//rest operator (the rest of the arguments)
function data(a,b,...c){
    console.log(a,b,c);
}

data(1,2,3,4,5,5);
//...: rest, turn the rest of the arguments into a list (array)
//avoid dealing with arguments as it is array-like, but not an array
//while rest is an array
function multiplyES2015(...nums){
    return nums.reduce((product, number) => {
        return product * number;
    }, 1);
}

console.log(multiplyES2015(1,2,3,4,5,6));

//spread - inverse of rest
//converts array into a comma-separated list of values
let arr = [1,2,3,4];
function logOut(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

logOut(...arr); //look like rest
//so rest is for defining function while spread is for using function

//special: you can use spread for arguments (while it is not an array)
