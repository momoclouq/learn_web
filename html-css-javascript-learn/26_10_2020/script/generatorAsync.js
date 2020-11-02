//generators
//a special type of function: return multiple values using yield keyword
//example
/*
function* firstGenerator(){
    for (let i = 0; i < 5; i++){
        yield i;
    }
}

let gen = firstGenerator();
console.log(gen.next());
console.log(gen.next());

//iterate over a generator using a for..of loop
for (let data of firstGenerator()){
    console.log(data);
}
*/

//more complex example
function getJokesAbout(term){
    $.getJSON(
        `https://icanhazdadjoke.com/search?term=${term}`,
        function(data){
            console.log(data);
        },
        function(err){
            console.log(err);
        }
    );
}

function* displayResults() {
    var result1 = yield getJokesAbout("spider");
    console.log(result1);
    var result2 = yield getJokesAbout("ghost");
    console.log(result2);
    var result3 = yield getJokesAbout("pizza");
    console.log(result3);
  }

  var gen = displayResults();

  // if we want to print all without using next()
  for (var jokeData of displayResults()) {
    console.log(jokeData);
  }

//but this is not clean, we should use async - ES2017
//codes that look like synchronous, but actually asynchronous
//we prefix our functions with the with the async keyword to denote that they are actually asynchronous
//invoke those function with keyword await to ensure that they have completed before their values


