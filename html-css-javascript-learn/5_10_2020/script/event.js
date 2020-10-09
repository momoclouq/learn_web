//introduction to events
//what is an event?
//events are things we can trigger by interacting with the browser
//some potential events we can listen (and then execute some code)
/*
- clicking on something
- hovering over something with the mouse
- pressing certain keys
- when the DOM has loaded
- when a form is submitted
*/

/*
//Option 1: directly in HTML. Note that in your HTML
//the first button makes reference to a function called firstClick
//in the onclik attribute
function firstClick(){
    alert("you clicked the first button!");
}

//Option 2: attach the function the the element
let secondButton = document.querySelector(".second_button");
secondButton.onclick = function(){
    alert("you clicked the second button!");
};

//Option 3 - use addEventListener
let thirdButton = ducument.querySelector(".third_button");
thirdButton.addEventListener("click", function(){
    alert("you clicked the third button!");
});
*/

//we should use option 2 and option 3, but option 3 is used in this course
//somehow the third option does not work?

let buttons = document.getElementsByTagName("button");

for (let button of buttons){
    button.addEventListener("click", function(){
        alert("Something is pressed");
    });
}

//removing an event listener: use removeEventListener
//in order to successfully remove an event listener, we cannot use anonymous function (the call back function must be normally declared)

function alertData(){
    alert("you just clicked a button");
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].removeEventListener("click", alertData);
}


