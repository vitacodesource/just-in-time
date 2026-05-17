function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();

  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseX, 0, width, 50, 200);
  let b = map(mouseX, 0, width, 255, 0);

  fill(r, g, b, 180);

  let size = map(mouseY, 0, height, 80, 260);

  ellipse(mouseX, mouseY, size);
}