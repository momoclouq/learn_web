document.addEventListener("DOMContentLoaded", function(){
    let firstChange = document.getElementById("change_heading");
    firstChange.innerText = "Hello World";

    //change text color when hovered
    let boxes = document.querySelectorAll("section div");

    console.log(boxes);

    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("mouseover", function(){
            boxes[i].style.color = boxes[i].className;
        });

        boxes[i].addEventListener("mouseout", function(){
            boxes[i].style.color = "white";
        });
    }

    //create a new div element
    let newdiv = document.createElement("div");

    newdiv.classList.add("purple");
    newdiv.color = "purple";
    
    //append the newdiv to the section tag
    let theSection = document.getElementsByTagName("section")[0];

    theSection.appendChild(newdiv);

    /*
    //racing game
    //start the game
    let start = document.getElementsByTagName("button")[0];

    console.log(start);

    function leftReached(car){
        if (parseInt(car.style.left) >= window.innerWidth) return true;
        return false;
    }

    function rungame(){
        let car1 = document.getElementsByClassName("car1")[0];
        let car2 = document.getElementsByClassName("car2")[0];

        let speedCar1 = 40;
        let speedCar2 = 30;
        let time = 1;

        car1.style.position = "absolute";
        car2.style.position = "absolute";

        let runTime = setInterval(function(){
            let howMuch1 = speedCar1 * time;
            let howMuch2 = speedCar2 * time;
            time++;

            car1.style.left = howMuch1 + "px";
            car2.style.left = howMuch2 + "px";

            if (leftReached(car1) || leftReached(car2)) {
                alert("a car has won");
                clearInterval(runTime);
            }
        }, 1000);
    }

    start.addEventListener("click", rungame);
    */

    //solution
    var button = document.querySelector("button");
    var car1 = document.querySelector('.car1');
    var car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    function reset(car1, car2){
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }

    button.addEventListener("click", function(event){
        button.disabled = true;
        car1.timer = setInterval(function(){
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car1.style.marginLeft) > window.innerWidth){
                alert("Car 1 wins!");
                reset(car1,car2);
            }
        },60);

        car2.timer = setInterval(function(){
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car2.style.marginLeft) > window.innerWidth){
                alert("Car 2 wins!");
                reset(car1,car2);
            }
        },60);
    });
});