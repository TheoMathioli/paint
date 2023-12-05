var mouseEnvent = "empty";


canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
widthLine = "2";
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e)
{


    color= document.getElementById("color").value;
    widthLine =document.getElementById("widthLine").value;
    radius = document.getElementById("radius").value;
    mouseEnvent = "mousedown";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    positionMouseX = e.clientX - canvas.offsetLeft;
    positionMouseY = e.clientY - canvas.offsetTop;

    if (mouseenvent== "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastpositionOFX, lastpositionOFY);
        ctx.lineTo(currentPositionOfMouseX, currentpositionOfMouseY)
        ctx.stroke();
    }

    lastpositionOFX = currentPositionOfMouseX
    lastpositionOFY = currentPositionOfMouseY
}

canvas.addEventListener("mouseUp", myMouseUp);
function myMouseUp(e)
{
    mouseEnvent = "mouseUp";
}

canvas.addEventListener("mouseLeave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEnvent = "mouseLeave";
}

var lastpositionOfTouchX, lastpositionOfTouchY;
var width = screen.width;

newWidth= screen.Width - 70;
newWidth= screen.Width - 300;
if(width < 992)
{
    document.getElementById("myCanvas").width = newWidht;
    document.getElementById("myCanvas").height = newWidht;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstar", touchstar);

function mytouchstar(e)
{
   console.log("myTouchStar");
   color = document.getElementById("color").value;
   widthOfLine = document.getElementById("widthOfLine").value;

   lastpositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
   lastpositionOfTouchY = e.touches[0].clientX - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e)
{
   currentpositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
   currentpositionOfTouchY = e.touches[0].clientX - canvas.offsetTop;
   ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastpositionOFX, lastpositionOFY);
        ctx.lineTo(currentPositionOfMouseX, currentpositionOfMouseY)
        ctx.stroke();

    lastpositionOFX = currentPositionOfMouseX
    lastpositionOFY = currentPositionOfMouseY

}

function clearArea() {
    ctx.clearrect(0, 0, ctx.canvas.width,ctx.canvas.height);
}