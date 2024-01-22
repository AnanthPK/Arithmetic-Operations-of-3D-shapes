var l = parseInt(prompt("Enter the Lenght"));
var b = parseInt(prompt("Enter the Breath"));
var h = parseInt(prompt("Enter the Height"));
var vol = l * b * h;
var csa = 2 * h * (l + b);
var tsa = 2 * (l * b + b * h + l * h);
document.write("Cuboid Volume " + vol + "<br>");
document.write("Cuboid Curved Surface Area " + csa + "<br>");
document.write("Cuboid Total Surface Area " + tsa + "<br>");
