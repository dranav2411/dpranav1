var mouseEvent = "empty";
var lastpositionofx,lastpositionofy;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("widthofline").value;
mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentpositionofmousex = e.clientX-canvas.offsetLeft;
    currentpositionofmousey = e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;

        console.log("last position of x and y coordinates =");
        console.log("X =" + lastpositionofx + "Y =" + lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy);

        console.log("current position of x and y coordinates =");
        console.log("X =" + currentpositionofmousex + "Y =" + currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
        ctx.stroke();
    }
    lastpositionofx = currentpositionofmousex;
    lastpositionofy = currentpositionofmousey;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent = "mouseleave";
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}