//common jQuery methods
//important

//manipulating and modiyfying elements/attributes
$(document).ready(function(){
    /*
    //getter
    $('article').html(); //return innerHTML
    $("article").text(); //innerText
    $("input").val(); //value in the input box

    //setter
    $("article").html("<h1>Here's some large text</h1>");
    $("li").text("hi!");
    $("input").val("new value");

    //addClass/removeClass/toggleClass
    $("article").addClass("hidden");
    $("article").removeClass("hidden");
    $("article").toggleClass("hidden"); //(if it is on -> off, if off -> on)

    //css/data/attr
    //these can be used as both getter and setter
    //1 argument = getter, 2 = setter
    $("article").css("background-color", "red");
    $("article").css("background-color"); //"red"
    $("article").attr("style", "display:flex;");
    $("article").data("id", "1");

    //traverse the DOM with jQuery
    //use find() to find elements within the selected element
    //parent/children/prev/next
    let $childDivsInsideArticle = $("article").find("div").children();
*/
    //methods to select elements based on certain filters
    //is/has/not/eq and many more: https://api.jquery.com/category/traversing/filtering/
    let $firstLi = $("li")[0]; //this will return the plain old HTMLelement -> methods for jQuery will not work
    $firstLi = $("li").eq(0); //this is the answer (this will return a jQuery object);
    console.log($firstLi.text());

    //adding and removing elements
    //after/before/append/prepend
    let $newParagraph = $("<p>");
    $newParagraph.text("another article");
    $newParagraph.css("color", "red");

    let $anotherParagraph =$("<p>", {
        text:"Another approach",
        css: {
            color: "purple",
            "font-size": "2em"
        }
    });
    $("article").append($newParagraph);
    $("article").prepend($anotherParagraph);

    //remove/empty
    //$("article").empty();
    //$("article").remove();

    //adding/removing events with jQuery
    //on/off
    $("article").on("click", function(e){
        console.log($(e.target).val()); //this works as $(e.target) is a jQuery object)
        //console.log(e.target.val()); this however does not work 
    });
});