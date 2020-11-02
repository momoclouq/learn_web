//a process can have many threads if multi-threading is supported
//but js only supports a single thread

//concurrency: more than one task makes progress regardless of another task
//one task then can continue without the need for the end of the first task
//concurrency can occur in js (asynchronous tasks)

//parallelism: more than one task runs at the same time, no taking turns
//to achieve parallelism in js, we would have to run multiple js processes using node.js processes or web workers (not fully supported)

//Asysnchronous: how? event loop
//check these links
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
//https://www.youtube.com/watch?v=8aGhZQkoFbQ
//video for event loop


//before going to callbacks
//first, AJAX - Asynchronous javascript and xml
//test ajax: check ajax directory

//use jqeury to make a request to the dada jokes api
$.getJSON(
    "https://icanhazdadjoke.com/",
    function(data){
        console.log("Cool, here's some joke data: ", data);
    },
    function(error){
        console.log("Oops somehting went wrong!", error);
    }
);

$.getJSON(
    "https://icanhazdadjoke.com/search?term=spider",
    function(data) {
      console.log("Here's some data on spider jokes: ", data);
      $.getJSON(
        "https://icanhazdadjoke.com/search?term=ghost",
        function(data) {
          console.log("Here's some data on ghost jokes: ", data);
          $.getJSON(
            "https://icanhazdadjoke.com/search?term=pizza",
            function(data) {
              console.log("Here's some data on pizza jokes: ", data);
            },
            function(error) {
              console.log("Oops something went wrong!", error);
            }
          );
        },
        function(error) {
          console.log("Oops something went wrong!", error);
        }
      );
    },
    function(error) {
      console.log("Oops something went wrong!", error);
    }
  );

//but as you can see, when we use callbacks to manage asynchronous code, callbacks get quite messy as we startnesting functions inside of each other