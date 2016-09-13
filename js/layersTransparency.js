var layer1Button = document.getElementById('layer1Button');
var layer2Button = document.getElementById("layer2Button");
var layer3Button = document.getElementById("layer3Button");
var layer4Button = document.getElementById("layer4Button");



var canvasLayers = document.getElementsByClassName('layers');


layer1Button.addEventListener("click", canvasSelect);
layer2Button.addEventListener("click", canvasSelect);
layer3Button.addEventListener("click", canvasSelect);
layer4Button.addEventListener("click", canvasSelect);


//SWITCH BETWEEN CANVASES AND CHANGE

function canvasSelect(e) {
  var layerNo = parseInt(this.innerHTML);
  console.log(layerNo);
  canvasLayers[layerNo - 1].style.zIndex = 3;
  console.log(canvasLayers[layerNo -1]);
}

for(var i = 0; i < canvasLayers.length; i++) {

}