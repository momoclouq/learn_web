//introduction to jQuery
//jQuery is one of the most popular js libraries out there
//support DOM minipulation, AJAX and much more
//nowadays, as browers are getting more and more alike, jQuery is not essential anymore
//some other libraries: Angular and React.js
//Still used by many websites !!!

//how to use: similar to bootstrap

$(document).ready(function(){
    //the DOM has now loaded
});

$(function(){
    //a shorter way to wait for the DOM to load
});

//to find elements in jQuery, we use CSS selectors (just like querySelector and querySelectorAll)
//the difference is that jQuery returns an (array-like) object called jQuery object

$(document).ready(function(){
    console.log($("article"));
});

//you can directly use vanilla methods like innerText, style on these 'elements'
//there are alternatives though

$(document).ready(function(){
    let $mainElement = $('#main'); //we name the variable with $ to indicate that we are working with jQuery
});

//exercise
$(document).ready(function(){
    //select footer element
    console.log($('footer'));

    //select the div with an id of container
    console.log($('div#container'));

    //select all of the li inside of the ul with a class of nav
    console.log($('ul.nav li'));

    //select the third li inside of the div with a class of list-container
    console.log($('div.container li:nth-child(3)'));

    //select only the last li in each of the ul
    console.log($('ul li:last-child'));
});