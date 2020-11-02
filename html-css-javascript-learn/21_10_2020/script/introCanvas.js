//a canvas is an html element that allows the developer to draw shapes, text, ...
//introduced by Apple

let canvas = document.getElementById("my-canvas");

//coordinates system in canvas
//x: grows from the left side of the element to the right
//y: grows from the bottom to the top
console.log("width: ", canvas.width, "height: ", canvas.height);
//this will show 300-150, this is the default value for width and height of a canvas
//but the canvas dimensions are different from the pixel dimensions
//so the thing to do is update the canvas size to the values from out style
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

console.log("width: ", canvas.width, "height: ", canvas.height);

//to draw on canvas, you firsst have to set the context for the drawing
//the context is the object that actually let you draw to the screen
let ctx = canvas.getContext('2d');

//draw a rectangle
let upperLeftX = 0;
let upperLeftY = 0;
let width = 50;
let height = 50;
ctx.fillRect(upperLeftX, upperLeftY, width, height);

//change the color of the rectangle
ctx.fillStyle = "orange";
ctx.fillRect(upperLeftX, upperLeftY, width, height);

//create a rectangle
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(40,40);
ctx.lineTo(0, 80);
ctx.fill();
ctx.closePath();

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//draw text on canvas
ctx.fillStyle = "white";
ctx.fillText("askdcmdsak", 50, 50);

//make things move
//to make movement in the canvas, you need to draw sth, clear the screen
let canvas2 = document.getElementById("canvas2");
canvas2.width = canvas2.scrollWidth;
canvas2.height = canvas2.scrollHeight;

ctx = canvas2.getContext('2d');

let square = {
    corner: [0,0],
    width: 50,
    height: 50,
    color: "red",
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
    }
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.corner[0] += 2;
    square.corner[1] += 2;
    square.draw();
}

draw();

//drawy every 50ms = 20 draws in 1 sec (20fps)
let intervalId = setInterval(draw,50);

