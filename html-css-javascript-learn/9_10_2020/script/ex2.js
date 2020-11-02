$(document).ready(function(){
    //1
    console.log("Let's get ready to party with jQuery!");

    //2
    let $imagesInArticle = $("article").find("img");
    console.log($imagesInArticle);
    for (let i = 0; i < $imagesInArticle.length; i++){
        $imagesInArticle.eq(i).addClass("image-center");
    }

    //3
    $("article p:last-child").remove();

    //4 set the font size of h1 with an id of title to be a pixel from 0 to 100
    $("h1#title").css("font-size", Math.random() * 100);

    //5 add an item to the list
    let $newListItem = $("<li>");
    $newListItem.text("hell yeah baby");
    $(document).find("ol").eq(0).append($newListItem);

    //6 empty the list and add an apology paragraph
    $("ol").empty();
    let $apology = $("<p>", {
        text: "im sorry for using this stupid text"
    });
    $("ol").append($apology);

    //7 
    let $colorChanger = $(document).find("input");
    for (let i = 0; i < $colorChanger.length; i++){
        $colorChanger.eq(i).on("change", function(){
            let newRed = $colorChanger.eq(0).val();
            let newGreen = $colorChanger.eq(1).val();
            let newBlue = $colorChanger.eq(2).val();
            let newColor = "rgb(" + newRed + "," + newGreen + "," + newBlue +")";

            $("body").css("background-color", newColor); 
        });
    }

    //8
    $("img").on("click", function(event){
        $(event.target).remove();
    });
});