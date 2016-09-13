var canvas = document.getElementById('cvs');
var drawingObj = canvas.getContext("2d");

//create EVENT LISTENERS ON THE CANVAS ELEMENTS 
canvas.addEventListener("mousemove", createDot);
canvas.addEventListener("mousedown", mouseIsDown);
canvas.addEventListener("mouseup", mouseIsUP);


//create the createDot function to draw on the CANVAS
//parameters required are radius for drawing the circle and cordinates(x,y) where the circle will be draw
var radius = 6;

var mouseDown = false;

drawingObj.lineWidth = radius * 2;

function mouseIsUP() {
	mouseDown = false;
	drawingObj.beginPath();
}

function mouseIsDown() {
	mouseDown = true;
}


function createDot(e) {
		if(mouseDown) {
		drawingObj.lineTo(e.offsetX, e.offsetY);
		drawingObj.stroke();
		drawingObj.beginPath();
		drawingObj.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2);
		drawingObj.fill();
		drawingObj.beginPath();
		drawingObj.moveTo(e.offsetX, e.offsetY);	
		}
}

//create CLEAR CANVAS FUNCTION
var clearbutton = document.getElementById("clearCanvas");

clearbutton.addEventListener("click", function() {
  drawingObj.clearRect(0,0,650,520);
})




