function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0);
}

function draw() {
  noStroke();
  fill(0);
  ellipse(mouseX, mouseY, 20);
}