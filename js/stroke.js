//VARIABLES TO ENABLE STROKE

var minRadius = 2;
var maxRadius = 102;
var defaultRadius =8;
var counter = 5;
var currentRadiusValue = document.getElementById('strokeVal');
var increaseRadius = document.getElementById('increaseStroke');
var decreaseRadius = document.getElementById('decreaseStroke');


// CHECK TO ENSURE THAT THE NEW RADUS PROVIDED IS WITHIN BOUNDS
function setRadius(newRadius) {
	if(newRadius < minRadius) {
			newRadius = minRadius;
	}
	else if(newRadius > maxRadius)  {
			newRadius = maxRadius;
	}

//SET THE RADIUS PROPERTY TO BE THE NEW RADIUS
	radius = newRadius;
	drawingObj.lineWidth = radius * 2;
	currentRadiusValue.innerHTML = radius;
	console.log(currentRadiusValue);
} 

increaseRadius.addEventListener("click", function() {
	setRadius(radius + counter);
})

decreaseRadius.addEventListener("click", function() {
	setRadius(radius - counter);
})


//IF NO EVENT RUNS SET THE RADIUS TO BE THE DEFAULT RADIUS
setRadius(defaultRadius);


