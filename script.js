function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();

  // simple overlay test
  noStroke();
  fill(255, 50);
  ellipse(mouseX, mouseY, 20);
}