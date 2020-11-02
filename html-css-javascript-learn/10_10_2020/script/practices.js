//selector caching
//As we start building larger applications with jQuery, we can make those application more efficiently
//means: find elements used repeatedly by DOM and save them to variables

//chaining
$("div").first().parent().find(".projects").css("color","red").fadeOut(200);

//jQuery iterators
//each - i = index, el = element - does not return a jQuery object
$("li").each(function(i,el) {
    console.log("Day " + i + ": " + $(el).text());
});

//map - i = index, el = element - return an object
var summary = $("li").map(function(i,el) {
    return $("<p>", {
      text: "On day " + i + ", I earned " + $(el).text() 
    });
  });

  $("body").append(summary.get()); 
  // this appends the summary to the page.
  // The .get method turns summary, a jQuery object, into an array.
  // Without invoking get, you'll receive a TypeError.

//filter - return a jQuery object
$("li").filter(function(i,el) {
    return $(el).text()[0] === "-"
    // returns true if the first character in the text is a minus sign,
    // i.e. this checks whether or not the number is negative
}).css('color','red');
// We've chained filter and css together; filter returns to us the 
// li's with negative numbers in them, and we then style those li's
// to have red text.