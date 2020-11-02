//promises are always preferred over callbacks when managing asynchronous code
//promises - each library has their own implementation of promises
//promises: a one-time guarantee of future value
//1 process wish to perform
//it will be given a timeslot to perform and will be able to perform no matter what

//use the native promise API, we use the Promise constructor

function firstPromise(){
    return new Promise(function(resolve, reject){
        let x = Math.random();
        if (x > 0.5){
            resolve(`Hooray! Your promise was resolved with value ${x}`);
        } else {
            reject(`Oh no, your promise was rejected with value ${x}`);
        }
    });
}

firstPromise().then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
});

firstPromise().then(function(){
    console.log("success");
}).catch(function(){
    console.log("failure");
});

function secondPromise(){
    return new Promise(function(resolve, reject){
        let timeToResolve = Math.random() * 5000;
        let maxTime = 3000;
        if (timeToResolve < maxTime) {
            setTimeout(function() {
              resolve(
                `Hooray! I completed your request after ${timeToResolve} milliseconds.`
              );
            }, timeToResolve);
          } else {
            setTimeout(function() {
              reject(
                `Sorry, this is taking too long. Stopping after ${maxTime} milliseconds. Please try again.`
              );
            }, maxTime);
          }
    });
}

secondPromise().then(function(data){
    console.log(data + "-1");
})
.catch(function(error){
    console.log(error + "-1");
});

secondPromise().then(function(data){
    console.log(data + "-2");
})
.catch(function(error){
    console.log(error + "-2");
});

secondPromise().then(function(data){
    console.log(data + "-3");
})
.catch(function(error){
    console.log(error + "-3");
});

//Promise.all: wait for multiple promises to resolve
function getJokesAbout(term){
    return $.getJSON(`https://icanhazdadjoke.com/search?term=${term}`);
}

Promise.all([
    getJokesAbout("spider"),
    getJokesAbout("ghost"),
    getJokesAbout("pizza")
])
  .then(function(data) {
    console.log("Woah check out all this data", data);
  })
  .catch(function(err) {
    console.log("Oops, something went wrong!");
  });


//chainable nature of promises
  $.getJSON("https://icanhazdadjoke.com/search?term=spider")
  .then(function(data) {
    console.log("Here's some data on spider jokes: ", data);
    return $.getJSON("https://icanhazdadjoke.com/search?term=ghost");
  })
  .then(function(data) {
    console.log("Here's some data on ghost jokes: ", data);
    return $.getJSON("https://icanhazdadjoke.com/search?term=pizza");
  })
  .then(function(data) {
    console.log("Here's some data on pizza jokes: ", data);
  })
  .catch(function(error) {
    console.log("Oops something went wrong!", error);
  });