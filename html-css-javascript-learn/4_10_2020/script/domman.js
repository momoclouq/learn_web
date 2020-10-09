//DOM manipulation

//modifying properties and attributes on elements
let firstDiv = document.getElementsByTagName("div")[0];

firstDiv.style.color = "red";
firstDiv.style.backgroundColor = "teal";

//if we want to access/modify attributes on elements, we can do that with getAttribute/setAttribute
let body = document.getElementById("container");

body.getAttribute("id"); //"container"
body.setAttribute("id", "new_container");
body.getAttribute("id"); //"new_container"

//add and remove classes to elements using classList
let secondDiv = document.getElementsByTagName("div")[1];

secondDiv.classList; //["hello"]
secondDiv.classList.add("another_class");
secondDiv.classList; //["hello", "another_class"]
secondDiv.classList.remove("hello");
secondDiv.classList; //["another_class"]

//Nodes vs Elements
//check link in the main html
//in short: a node is generic name for any type of object in the DOM hierarchy
//any DOM object
//example: document/document.body/<input>/<p> 

//element is one specific type of node
//...

//traversing the DOM
let container = document.getElementById("container");
container.childNodes; // // this contains all of the nodes (including text nodes) that are children
container.childNodes.length; // 11
container.children; // this contains all of the elements that are children of the element we have selected
container.children.length; // 5
 
let link = document.querySelector("a");
link.parentElement; // <body id="container">...</body>
link.previousElementSibling; // <div class="hello">Hello Everyone!</div>
link.previousSibling; // text node
link.nextSibling; // text node
link.nextElementSibling; // <button>​Click me!​</button>​

//creating elements
let newDiv = document.createElement("div");

//appending elements
let button = document.createElement("button");
button.innerText = "I am a button created with Javascript";

container.appendChild(button);

//remove elements
let linkToBeRemoved = document.querySelector("a");

container.removeChild(linkToBeRemoved);

//changing multiple elements - you have to use a loop
let divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = "red";
}