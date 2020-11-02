function inOrder(fn1, fn2){
    return function(){
        console.log("here0");
        if(fn1) {
            console.log("here");
            fn2;
        }
    }
}

//promise implementation
function inOrder2(fn1, fn2){
    return new Promise(function(resolve, reject){
        if(fn1){
            resolve(fn2);
        } else {
            reject("Shit, fn1 is still on the run");
        }
    });
}

var logOne = setTimeout(function() {
    console.log("one!");
}, Math.random() * 1000);
  
var logTwo = setTimeout(function() {
    console.log("two!");
}, Math.random() * 1000);

inOrder2(logOne, logTwo).then()
.catch(function(error){
    console.log(error);
});

//these are unsolved!!!