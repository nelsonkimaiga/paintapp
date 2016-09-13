//SET EVENT LISTENERS FOR SHAPE BUTTON AND THE INPUT FIELDS

var shapeMode = document.getElementById("shapeMode");
var shapeSelection = document.getElementById('shapeSelect');
var circleRadius = document.getElementById("circleRadius");
var rectangleLength = document.getElementById("rectangleLength");
var rectangleWidth = document.getElementById("rectangleWidth");
var squareLength = document.getElementById("squareLength");


//ENSURE THAT ONLY IN SHAPE MODE THAT YOU CAN DRAW SHAPES
shapeMode.addEventListener("click", function() {

  shapeSelection.addEventListener("click", function() {
  var $this = this;

  if($this.value === "circle") {
    circleRadius.style.display = "block";
    circleRadius.addEventListener("blur", drawCircle);
    //DRAWING CIRCLE FUNCTION
    function drawCircle(e) {
      canvas.addEventListener("dblclick", function(e) {
        var circleRadiusValue = Number(circleRadius.value);
        var minCircleRadiusValue = 0;
        var maxCircleRadiusValue = 120;
        
        if(circleRadiusValue < minCircleRadiusValue) {
          circleRadiusValue = minCircleRadiusValue;
        }
        else if(circleRadiusValue > maxCircleRadiusValue) {
          circleRadiusValue = maxCircleRadiusValue;
        }

        
        drawingObj.beginPath();
        drawingObj.arc(e.offsetX, e.offsetY, circleRadiusValue, 0, Math.PI * 2);
        drawingObj.stroke();
        drawingObj.fill();
        drawingObj.beginPath();

      })      
    }
  }
  else {
    circleRadius.style.display = "none";
  }
  if($this.value === "rectangle") {
    rectangleLength.style.display = "block";
    rectangleWidth.style.display = "block";
    var rectangleLengthValue = 0;
    var rectangleWidthValue = 0;
    
    //DRAWING RECTANGLE FUNCTION
    rectangleLength.addEventListener("blur", function() {
      rectangleLengthValue = Number(rectangleLength.value);
    } );
    rectangleWidth.addEventListener("blur", drawRectangle)

    function drawRectangle(e) {
      canvas.addEventListener("dblclick", function(e) {
        rectangleWidthValue = Number(rectangleWidth.value);
        if(rectangleLengthValue < 4 && rectangleWidthValue > 4) {
          rectangleLengthValue = 4;
        }
        else if (rectangleLengthValue > 300 && rectangleWidthValue < 300) {
          rectangleLengthValue = 300;
        }

        drawingObj.beginPath();
        drawingObj.rect(e.offsetX, e.offsetY, rectangleLengthValue, rectangleWidthValue);
        drawingObj.stroke();
        drawingObj.fill();
        drawingObj.beginPath();
      })
    } 
  }
  else {
    rectangleLength.style.display = "none";
    rectangleWidth.style.display = "none";
  }
  /*
  if($this.value === "square") {
    squareLength.style.display = "block";
    squareLength.addEventListener("blur", drawSquare);

    //DRAWING SQUARE FUNCTION
    function drawSquare(e) {
      canvas.addEventListener("dblclick" function(e) {
        squareLengthValue = Number(squareLength.value);
        if(squareLengthValue < 4) {
          squareLengthValue = 4;
        }
        else if (squareLengthValue > 150) {
          squareLengthValue = 150;
        }
        drawingObj.beginPath();
        drawingObj.rect(e.offsetX, e.offsetY, squareLengthValue, squareLengthValue);
        drawingObj.stroke();
        drawingObj.fill();
        drawingObj.beginPath();

      })
    }
  }
  else {
    squareLength.style.display = "none";
  }
  */ 
})

})






