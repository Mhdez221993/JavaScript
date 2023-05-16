function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}

// Get the circle element
let circle = document.querySelector(".circle");

// Set the radius of the circle
let radius = 1100;

// Generate random coordinates on the circle
let point = randomPointOnCircle(radius);

// Set the circle's position
circle.style.top = point.y + "px";
circle.style.left = point.x + "px";

console.log("point");
