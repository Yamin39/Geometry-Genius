/**
 *  objective: get base and height of a triangle.calculate the area by using the given formula. and display the result
 */

function calculateTriangleArea() {
  const triangleDisplay = document.getElementById("triangle-display");
  const triangleBase = document.getElementById("triangle-base").value;
  const triangleHeight = document.getElementById("triangle-height").value;
  const areaOfTriangle = 0.5 * Number(triangleBase) * Number(triangleHeight);
  triangleDisplay.innerText = areaOfTriangle;
//   console.log(areaOfTriangle);
}
