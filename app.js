var button = document.getElementById("button")
console.log("button: ", button);

var numberInsideShape  = 1
var lastshapenumber = 0

button.onclick=()=>{

    var n = document.getElementById("number").value
    console.log("this is input value : ", n);

    var circle = document.getElementById("circle").checked
    var square = document.getElementById("square").checked
    var rectangle = document.getElementById("rectangle").checked
console.log("circle: ", circle);
console.log("square: ", square);
console.log("rectangle: ", rectangle);


var TotalShapes = Number(lastshapenumber) + Number(n)
console.log("TotalShapes: ", TotalShapes)

var box = document.getElementById("box")
for(let i = numberInsideShape; i<=TotalShapes; i++){

var shape = document.createElement("div")

shape.innerHTML = numberInsideShape;
numberInsideShape = numberInsideShape += 1

if (square == true) {
    shape.classList.add("square");
} else if (circle == true) {
    shape.classList.add("circle");
} else if (rectangle == true) {
    shape.classList.add("rectangle");
}

console.log("shape: ", shape);

box.append(shape)

lastshapenumber = box.lastElementChild.innerHTML
}

}                                                                                                   