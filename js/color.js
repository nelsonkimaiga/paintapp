//GET THE SWATCHES AND STORE THEM IN AN ARRAY AND ATTACH A CLICK EVENT ON EACH ONE OF THEM

var swatches = document.getElementsByClassName("swatch");

for(var i = 0; i < swatches.length; i++) {
	swatches[i].addEventListener("click", setSwatch);
}


function setColor(color) {
	drawingObj.fillStyle = color;
	drawingObj.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];

	//SET THE CURRENT SWATCH TO BE THE ACTIVE SWATCH
	if(active) {
		active.className = "swatch";

	}
}

function setSwatch(e) {
	var swatch = e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className += " active";
}
