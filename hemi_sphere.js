var r = parseInt(prompt("Enter the Radius "));
var csa = 2 * 3.14 * r * r;
var tsa = 3 * 3.14 * r * r;
var vol = 0.3 * 2 *3.14 * r ** 3;
document.write("Right Hemi Sphere Volume " + vol + "<br>");
document.write("Right Hemi Sphere Curved Surface Area " + csa + "<br>");
document.write("Right Hemi Sphere Total Surface Area " + tsa + "<br>");