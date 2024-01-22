var r = parseInt(prompt("Enter the Radius "));
var l = parseInt(prompt("Enter the Lenght "));
var h = parseInt(prompt("Enter the Height "));
var csa = 3.14 * r * l;
var tsa = 3.14 * r * (r + l);
var vol = 0.3 * 3.14 * r * r * h;
document.write("Right Circuler Cone Volume " + vol + "<br>");
document.write("Right Circuler Cone Curved Surface Area " + csa + "<br>");
document.write("Right Circuler Cone Total Surface Area " + tsa + "<br>");