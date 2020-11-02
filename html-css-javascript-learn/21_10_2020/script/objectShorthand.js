//ways to write code more concisely and with less repetition
let obj = {
    firstName: "minh",
    func1: () => {
        console.log("what do you want");
    },
    func2(){
        console.log("what do you want2");
    }
}

obj.func1();
obj.func2();

//destructuring: extract data from arrays or objets into distinct variables
//useful for assigning multiple variables at once
let obj1 = {
    ax: 1,
    bx: 2,
    cx: 3
}

let {ax, bx, cx} = obj1;
//for object: the variables must be the same as the keys in object
console.log(ax);
console.log(bx);
console.log(cx);

//the same with arrays
//but we can name the variables however we want
let arr = [1,2,3,4];
let [axx,bxx,cxx,dxx] = arr;
console.log(axx);
console.log(bxx);
console.log(cxx);
console.log(dxx);

//[a,b] = [b,a] - swap values
