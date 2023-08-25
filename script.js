window.onresize = displayCurrentSize;
displayCurrentSize()

function displayCurrentSize(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	var val =document.getElementById("sizeInfo")
	val.innerHTML = "Width: " + width + " and Height: " + height;
}