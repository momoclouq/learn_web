//select the section with an id of container without using querySelector
let section1 = document.getElementById("container");

//select the section with an id of container with querySelector
let section2 = document.querySelector("#container");

//select all of the list items with a class of "second"
let section3 = document.querySelectorAll("li.second");

//select all of the list items with a class of third, but only the list item inside of ol tag
let section4 = document.querySelectorAll("ol li.third");

//give the section with an id of container the text "hello"
section1.innerHTML = "Hello";

//add the class main to the div with a class of footer
let section5 = document.getElementsByClassName("footer")[0];

section5.classList.add("main");

//remove the class main on the div with a class of footer
section5.classList.remove("main");

//create a new li element
let newDiv = document.createElement("div");

//give the li the text four
newDiv.innerText = "four";

//append the li to the ul element
let unorderList = document.getElementsByTagName("ul")[0];

unorderList.appendChild(newDiv);

//loop over all of the li inside the ol tag and give them a background color of "green"
let liInside = document.querySelectorAll("ol li");

for (let i = 0; i < liInside.length; i++){
    liInside[i].style.backgroundColor = "green";
}

//remove the div with a class of footer
let divToBeRemoved = document.querySelector("div.footer");

section1.removeChild(divToBeRemoved);