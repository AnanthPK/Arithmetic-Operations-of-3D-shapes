var r = parseInt(prompt("Enter the Radius "));
var h = parseInt(prompt("Enter the Height "));
var csa = 2 * 3.14 * r * h;
var tsa = 2 * 3.14 * r * (r + h);
var vol = 3.14 * r * r * h;
document.write("Right Circuler Cylinder Volume " + vol + "<br>");
document.write("Right Circuler Cylinder Curved Surface Area " + csa + "<br>");
document.write("Right Circuler Cylinder Total Surface Area " + tsa + "<br>");
