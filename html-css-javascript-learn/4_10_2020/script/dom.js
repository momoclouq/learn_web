//what is DOM
//Document Object Model - a programming interface for HTML, XML and SVG documents
//provides a structured representation of the document as a tree
//defines methods that allow access to the tree (change the document)
//in short: connects web pages to scripts or programming languages

//to access DOM - we use the document object

//select elements by their id - getElementById
let container = document.getElementById("container");

//select elements by the query (all tags) - querySelector
//it will return the first matching element that it finds
let container2 = document.querySelector("#container");

//select multiple elements: getElementsByTagName or getElementsByClassName
let divs = document.getElementsByTagName("div");
let divs2 = document.querySelectorAll("div");