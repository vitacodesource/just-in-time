function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0); // should permanently show red
}

function draw() {
  fill(0);
  ellipse(mouseX, mouseY, 50);
}