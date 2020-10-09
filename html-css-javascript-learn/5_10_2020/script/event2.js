//event continue
//when an event is triggered, we have access to the event object
//two most important parts:
//event target - the targe element of the event
//event.preventDefault - a function that prevents the default action
//Commonly used for stopping a form submission from refreshing the page

//capturing vs bubbling
//there is a third parameter we can pass in as a boolean called useCapture
//which determines if we use capturing or bubling
//in short, when both elements have registered a handle for that event
//the event propagation mode determines the order in which elements receive the event
//more in the link


//accessing the value of whatever is clicked
/*
let listItems = document.querySelectorAll('li');

//use the event.target property
for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", function(event){
        alert("you just clicked on " + event.target.innerText);
    });
}
*/

//thing is: you can add event listener to the parent elements
let ul = document.querySelector("ul");

ul.addEventListener("click", function(event){
    alert("you just clicked on " + event.target.innerText);
});