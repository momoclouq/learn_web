//jQuery events
//event delegation
//the process of using event propagation (bubbling) to handle events at a higher level in the DOM
//than the element on which the event originate
//allows us to attach a single event listener for elements that exist now or in the future

$(function(){
    $("ul").on("click", "li", function(e){
        console.log("You just clicked on ", $(e.target).text());
    });
});

//for vanilla js, event object contains a preventDefault to stop the default behavior of an event
//common with form submissions because the default action of a form is to refresh a page
//there is a different method: stopPropagation
//stopPropagation will prevent an event form bubbling up (check html file)